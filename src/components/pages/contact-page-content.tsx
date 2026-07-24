"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/constants/company";
import { useLocale } from "@/hooks/use-locale";
import {
  contactFormLimits,
  type ContactFormFieldErrors,
  type ContactFormResponse,
} from "@/lib/contact-form";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

const pageContent = {
  eyebrow: {
    fr: "Contact",
    en: "Contact",
  },
  title: {
    fr: "Échanger avec PROOFTAG CATIS",
    en: "Talk to PROOFTAG CATIS",
  },
  description: {
    fr: "Présentez une demande liée à la sécurité documentaire, à la vérification numérique, à la traçabilité ou au contrôle technique.",
    en: "Submit a request related to document security, digital verification, traceability or vehicle inspection.",
  },
  cards: [
    {
      icon: Mail,
      title: {
        fr: "Email",
        en: "Email",
      },
      value: company.email,
      href: `mailto:${company.email}`,
      description: {
        fr: "Pour les demandes d’information et les échanges professionnels.",
        en: "For information requests and professional exchanges.",
      },
    },
    {
      icon: Phone,
      title: {
        fr: "Téléphone",
        en: "Phone",
      },
      value: company.phone,
      href: `tel:${company.phone.replaceAll(" ", "")}`,
      description: {
        fr: "Pour joindre directement PROOFTAG CATIS.",
        en: "To reach PROOFTAG CATIS directly.",
      },
    },
    {
      icon: MapPin,
      title: {
        fr: "Localisation",
        en: "Location",
      },
      value: company.address,
      description: {
        fr: "PROOFTAG CATIS est basée à Douala, Cameroun.",
        en: "PROOFTAG CATIS is based in Douala, Cameroon.",
      },
    },
  ],
  solutionContactTitle: {
    fr: "Une prise de contact orientée solution",
    en: "A solution-oriented first contact",
  },
  solutionContactDescription: {
    fr: "Présentez votre contexte, vos contraintes et vos objectifs afin de faciliter l’analyse de votre demande.",
    en: "Describe your context, constraints and goals to help assess your request.",
  },
  responseNotice: {
    fr: "Notre équipe vous répondra dans les meilleurs délais.",
    en: "Our team will get back to you as soon as possible.",
  },
  formBadge: {
    fr: "Formulaire de contact",
    en: "Contact form",
  },
  formTitle: {
    fr: "Présentez votre demande",
    en: "Describe your request",
  },
  formDescription: {
    fr: "Renseignez les éléments clés de votre demande. Le message sera transmis via le canal officiel du site.",
    en: "Enter the key details of your request. The message will be sent through the website’s official channel.",
  },
  nameLabel: {
    fr: "Nom complet",
    en: "Full name",
  },
  namePlaceholder: {
    fr: "Votre nom",
    en: "Your name",
  },
  emailLabel: {
    fr: "Adresse email",
    en: "Email address",
  },
  emailPlaceholder: {
    fr: "votre@email.com",
    en: "your@email.com",
  },
  subjectLabel: {
    fr: "Sujet",
    en: "Subject",
  },
  subjectPlaceholder: {
    fr: "Exemple : Demande d’information sur Certidocs CT",
    en: "Example: Information request about Certidocs CT",
  },
  messageLabel: {
    fr: "Message",
    en: "Message",
  },
  messagePlaceholder: {
    fr: "Décrivez votre besoin...",
    en: "Describe your need...",
  },
  submit: {
    fr: "Envoyer la demande",
    en: "Send request",
  },
  submitting: {
    fr: "Envoi en cours...",
    en: "Sending...",
  },
  successMessage: {
    fr: "Votre message a bien été envoyé. L’équipe PROOFTAG CATIS vous répondra dans les meilleurs délais.",
    en: "Your message has been sent. The PROOFTAG CATIS team will get back to you as soon as possible.",
  },
  genericError: {
    fr: "Le message n’a pas pu être envoyé pour le moment. Merci de réessayer plus tard.",
    en: "The message could not be sent right now. Please try again later.",
  },
  validationError: {
    fr: "Merci de corriger les champs indiqués avant d’envoyer votre message.",
    en: "Please correct the highlighted fields before sending your message.",
  },
  requiredName: {
    fr: "Le nom est obligatoire.",
    en: "Name is required.",
  },
  requiredEmail: {
    fr: "L’adresse email est obligatoire.",
    en: "Email address is required.",
  },
  invalidEmail: {
    fr: "Adresse email invalide.",
    en: "Invalid email address.",
  },
  requiredSubject: {
    fr: "Le sujet est obligatoire.",
    en: "Subject is required.",
  },
  requiredMessage: {
    fr: "Le message est obligatoire.",
    en: "Message is required.",
  },
  minMessage: {
    fr: `Le message doit contenir au moins ${contactFormLimits.minMessageLength} caractères.`,
    en: `The message must contain at least ${contactFormLimits.minMessageLength} characters.`,
  },
  formNotice: {
    fr: `Vous pouvez aussi écrire directement à ${company.email}.`,
    en: `You can also write directly to ${company.email}.`,
  },
  privacyNotice: {
    fr: "Les informations transmises via ce formulaire sont utilisées uniquement pour répondre à votre demande.",
    en: "Information submitted through this form is used only to respond to your request.",
  },
  privacyLink: {
    fr: "Consulter la politique de confidentialité",
    en: "Read the privacy policy",
  },
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormStatus =
  | {
      type: "idle";
      message: "";
    }
  | {
      type: "success" | "error";
      message: string;
    };

export function ContactPageContent() {
  const locale = useLocale();
  const formStartedAt = useRef(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<ContactFormFieldErrors>({});
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    formStartedAt.current = Date.now();
  }, []);

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  const validateClientPayload = (payload: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const errors: ContactFormFieldErrors = {};

    if (!payload.name) {
      errors.name = t(pageContent.requiredName);
    }

    if (!payload.email) {
      errors.email = t(pageContent.requiredEmail);
    } else if (!emailPattern.test(payload.email)) {
      errors.email = t(pageContent.invalidEmail);
    }

    if (!payload.subject) {
      errors.subject = t(pageContent.requiredSubject);
    }

    if (!payload.message) {
      errors.message = t(pageContent.requiredMessage);
    } else if (payload.message.length < contactFormLimits.minMessageLength) {
      errors.message = t(pageContent.minMessage);
    }

    return errors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      locale,
      name: getFormValue(formData, "name"),
      email: getFormValue(formData, "email"),
      subject: getFormValue(formData, "subject"),
      message: getFormValue(formData, "message"),
      companyWebsite: getFormValue(formData, "companyWebsite"),
      startedAtMs: formStartedAt.current,
    };
    const nextFieldErrors = validateClientPayload(payload);

    setFieldErrors(nextFieldErrors);

    if (Object.keys(nextFieldErrors).length > 0) {
      setStatus({
        type: "error",
        message: t(pageContent.validationError),
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as ContactFormResponse;

      if (result.ok) {
        setFieldErrors({});
        setStatus({
          type: "success",
          message: result.message || t(pageContent.successMessage),
        });
        form.reset();
        formStartedAt.current = Date.now();
      } else {
        setFieldErrors(result.fieldErrors ?? {});
        setStatus({
          type: "error",
          message: result.message || t(pageContent.genericError),
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: t(pageContent.genericError),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow={t(pageContent.eyebrow)}
        title={t(pageContent.title)}
        description={t(pageContent.description)}
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="grid gap-5">
              {pageContent.cards.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.value} padding="lg">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      <CardTitle className="mt-6">
                        {t(item.title)}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      {"href" in item ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-foreground transition hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">
                          {item.value}
                        </p>
                      )}

                      <p className="mt-3 text-sm leading-7 text-muted">
                        {t(item.description)}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}

              <Card padding="lg" variant="muted">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <CardTitle className="mt-6">
                    {t(pageContent.solutionContactTitle)}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    {t(pageContent.solutionContactDescription)}
                  </p>
                  <p className="mt-4 text-sm font-medium leading-7 text-foreground">
                    {t(pageContent.responseNotice)}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card padding="lg" className="border-primary/20">
              <CardHeader>
                <Badge variant="accent">{t(pageContent.formBadge)}</Badge>

                <CardTitle className="mt-6">
                  {t(pageContent.formTitle)}
                </CardTitle>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {t(pageContent.formDescription)}
                </p>
              </CardHeader>

              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  aria-describedby="contact-form-notice"
                  className="grid gap-5"
                >
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="companyWebsite">Company website</label>
                    <input
                      id="companyWebsite"
                      name="companyWebsite"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-foreground"
                    >
                      {t(pageContent.nameLabel)}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t(pageContent.namePlaceholder)}
                      autoComplete="name"
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={
                        fieldErrors.name ? "name-error" : undefined
                      }
                      required
                    />
                    <FieldError id="name-error" message={fieldErrors.name} />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-foreground"
                    >
                      {t(pageContent.emailLabel)}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t(pageContent.emailPlaceholder)}
                      autoComplete="email"
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={
                        fieldErrors.email ? "email-error" : undefined
                      }
                      required
                    />
                    <FieldError id="email-error" message={fieldErrors.email} />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-foreground"
                    >
                      {t(pageContent.subjectLabel)}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder={t(pageContent.subjectPlaceholder)}
                      aria-invalid={Boolean(fieldErrors.subject)}
                      aria-describedby={
                        fieldErrors.subject ? "subject-error" : undefined
                      }
                      required
                    />
                    <FieldError
                      id="subject-error"
                      message={fieldErrors.subject}
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-foreground"
                    >
                      {t(pageContent.messageLabel)}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t(pageContent.messagePlaceholder)}
                      aria-invalid={Boolean(fieldErrors.message)}
                      aria-describedby={
                        fieldErrors.message ? "message-error" : undefined
                      }
                      required
                    />
                    <FieldError
                      id="message-error"
                      message={fieldErrors.message}
                    />
                  </div>

                  {status.type !== "idle" ? (
                    <p
                      role={status.type === "error" ? "alert" : "status"}
                      className={
                        status.type === "success"
                          ? "rounded-md border border-success/20 bg-success/10 px-4 py-3 text-sm leading-6 text-success"
                          : "rounded-md border border-error/20 bg-error/10 px-4 py-3 text-sm leading-6 text-error"
                      }
                    >
                      {status.message}
                    </p>
                  ) : null}

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? t(pageContent.submitting)
                      : t(pageContent.submit)}
                  </Button>

                  <p
                    id="contact-form-notice"
                    className="text-xs leading-6 text-muted"
                  >
                    {t(pageContent.formNotice)}
                  </p>

                  <p className="text-xs leading-6 text-muted">
                    {t(pageContent.privacyNotice)}{" "}
                    <Link
                      href={localizePathname("/confidentialite", locale)}
                      className="font-semibold text-primary transition hover:text-primary-hover"
                    >
                      {t(pageContent.privacyLink)}
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}

function getFormValue(formData: FormData, name: string) {
  const value = formData.get(name);

  return typeof value === "string" ? value.trim() : "";
}

function FieldError({
  id,
  message,
}: {
  id: string;
  message?: string;
}) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="text-xs leading-5 text-error">
      {message}
    </p>
  );
}
