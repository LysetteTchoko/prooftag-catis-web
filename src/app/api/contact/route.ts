import { defaultLocale } from "@/constants/locales";
import {
  contactFormLimits,
  type ContactFormFieldErrors,
  type ContactFormPayload,
  type ContactFormResponse,
} from "@/lib/contact-form";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaxRequests = 5;
const rateLimitStore = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

const messages = {
  fr: {
    success:
      "Votre message a bien été envoyé. L’équipe PROOFTAG CATIS vous répondra dans les meilleurs délais.",
    invalid:
      "Merci de corriger les champs indiqués avant d’envoyer votre message.",
    invalidEmail: "Adresse email invalide.",
    requiredName: "Le nom est obligatoire.",
    requiredEmail: "L’adresse email est obligatoire.",
    requiredSubject: "Le sujet est obligatoire.",
    requiredMessage: "Le message est obligatoire.",
    minMessage: `Le message doit contenir au moins ${contactFormLimits.minMessageLength} caractères.`,
    tooLong: "Ce champ est trop long.",
    tooFast:
      "Merci de patienter quelques secondes avant d’envoyer le formulaire.",
    rateLimited:
      "Trop de tentatives ont été effectuées. Merci de réessayer plus tard.",
    configuration:
      "L’envoi du formulaire n’est pas encore configuré côté serveur.",
    delivery:
      "Le message n’a pas pu être envoyé pour le moment. Merci de réessayer plus tard.",
  },
  en: {
    success:
      "Your message has been sent. The PROOFTAG CATIS team will get back to you as soon as possible.",
    invalid:
      "Please correct the highlighted fields before sending your message.",
    invalidEmail: "Invalid email address.",
    requiredName: "Name is required.",
    requiredEmail: "Email address is required.",
    requiredSubject: "Subject is required.",
    requiredMessage: "Message is required.",
    minMessage: `The message must contain at least ${contactFormLimits.minMessageLength} characters.`,
    tooLong: "This field is too long.",
    tooFast: "Please wait a few seconds before submitting the form.",
    rateLimited: "Too many attempts. Please try again later.",
    configuration:
      "Form delivery is not configured on the server yet.",
    delivery:
      "The message could not be sent right now. Please try again later.",
  },
} as const;

export async function POST(request: Request) {
  const rawPayload = await readJson(request);
  const payload = normalizePayload(rawPayload);
  const locale = payload.locale;
  const t = messages[locale];

  if (payload.companyWebsite) {
    return jsonResponse({ ok: true, message: t.success });
  }

  if (!isHumanSubmitDelay(payload.startedAtMs)) {
    return jsonResponse(
      {
        ok: false,
        message: t.tooFast,
      },
      429
    );
  }

  if (isRateLimited(getClientIp(request))) {
    return jsonResponse(
      {
        ok: false,
        message: t.rateLimited,
      },
      429
    );
  }

  const fieldErrors = validatePayload(payload);

  if (Object.keys(fieldErrors).length > 0) {
    return jsonResponse(
      {
        ok: false,
        message: t.invalid,
        fieldErrors,
      },
      400
    );
  }

  const emailConfig = getEmailConfig();

  if (!emailConfig) {
    return jsonResponse(
      {
        ok: false,
        message: t.configuration,
      },
      500
    );
  }

  const sent = await sendContactEmail(payload, emailConfig);

  if (!sent) {
    return jsonResponse(
      {
        ok: false,
        message: t.delivery,
      },
      502
    );
  }

  return jsonResponse({ ok: true, message: t.success });
}

function jsonResponse(response: ContactFormResponse, status = 200) {
  return Response.json(response, { status });
}

async function readJson(request: Request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

function normalizePayload(value: unknown): ContactFormPayload {
  const payload = isRecord(value) ? value : {};
  const locale = payload.locale === "en" ? "en" : defaultLocale;

  return {
    locale,
    name: normalizeString(payload.name),
    email: normalizeString(payload.email),
    phone: normalizeString(payload.phone),
    organization: normalizeString(payload.organization),
    subject: normalizeString(payload.subject),
    message: normalizeString(payload.message),
    companyWebsite: normalizeString(payload.companyWebsite),
    startedAtMs:
      typeof payload.startedAtMs === "number"
        ? payload.startedAtMs
        : undefined,
  };
}

function validatePayload(payload: ContactFormPayload) {
  const t = messages[payload.locale];
  const errors: ContactFormFieldErrors = {};

  if (!payload.name) {
    errors.name = t.requiredName;
  } else if (payload.name.length > contactFormLimits.maxNameLength) {
    errors.name = t.tooLong;
  }

  if (!payload.email) {
    errors.email = t.requiredEmail;
  } else if (
    payload.email.length > contactFormLimits.maxEmailLength ||
    !emailPattern.test(payload.email)
  ) {
    errors.email = t.invalidEmail;
  }

  if (
    payload.phone &&
    payload.phone.length > contactFormLimits.maxPhoneLength
  ) {
    errors.phone = t.tooLong;
  }

  if (
    payload.organization &&
    payload.organization.length > contactFormLimits.maxOrganizationLength
  ) {
    errors.organization = t.tooLong;
  }

  if (!payload.subject) {
    errors.subject = t.requiredSubject;
  } else if (payload.subject.length > contactFormLimits.maxSubjectLength) {
    errors.subject = t.tooLong;
  }

  if (!payload.message) {
    errors.message = t.requiredMessage;
  } else if (payload.message.length < contactFormLimits.minMessageLength) {
    errors.message = t.minMessage;
  } else if (payload.message.length > contactFormLimits.maxMessageLength) {
    errors.message = t.tooLong;
  }

  return errors;
}

function isHumanSubmitDelay(startedAtMs: number | undefined) {
  if (!startedAtMs) {
    return false;
  }

  return Date.now() - startedAtMs >= contactFormLimits.minSubmitDelayMs;
}

function isRateLimited(clientIp: string) {
  const now = Date.now();

  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  const current = rateLimitStore.get(clientIp);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(clientIp, {
      count: 1,
      resetAt: now + rateLimitWindowMs,
    });
    return false;
  }

  current.count += 1;
  rateLimitStore.set(clientIp, current);

  return current.count > rateLimitMaxRequests;
}

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local"
  );
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL?.split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (!apiKey || !from || !to?.length) {
    return null;
  }

  return { apiKey, from, to };
}

async function sendContactEmail(
  payload: ContactFormPayload,
  config: {
    apiKey: string;
    from: string;
    to: string[];
  }
) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: config.from,
      to: config.to,
      reply_to: payload.email,
      subject: `Message site web - ${payload.subject}`,
      text: createPlainTextEmail(payload),
      html: createHtmlEmail(payload),
    }),
  });

  if (!response.ok) {
    console.error("Contact form email delivery failed", {
      status: response.status,
      body: (await response.text()).slice(0, 500),
    });
  }

  return response.ok;
}

function createPlainTextEmail(payload: ContactFormPayload) {
  return [
    "Nouveau message depuis le site PROOFTAG CATIS",
    "",
    `Nom: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Téléphone: ${payload.phone}` : null,
    payload.organization ? `Organisation: ${payload.organization}` : null,
    `Sujet: ${payload.subject}`,
    "",
    "Message:",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");
}

function createHtmlEmail(payload: ContactFormPayload) {
  const rows = [
    ["Nom", payload.name],
    ["Email", payload.email],
    ["Téléphone", payload.phone],
    ["Organisation", payload.organization],
    ["Sujet", payload.subject],
  ].filter((row): row is [string, string] => Boolean(row[1]));

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6">
      <h1 style="font-size:20px;margin:0 0 16px">Nouveau message depuis le site PROOFTAG CATIS</h1>
      <table style="border-collapse:collapse;width:100%;max-width:640px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:700">${escapeHtml(label)}</td>
                <td style="padding:8px 12px;border:1px solid #e5e7eb">${escapeHtml(value ?? "")}</td>
              </tr>
            `
          )
          .join("")}
      </table>
      <h2 style="font-size:16px;margin:24px 0 8px">Message</h2>
      <p style="white-space:pre-line;margin:0">${escapeHtml(payload.message)}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
