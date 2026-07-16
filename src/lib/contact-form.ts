import type { Locale } from "@/constants/locales";

export const contactFormLimits = {
  minMessageLength: 20,
  minSubmitDelayMs: 3000,
  maxNameLength: 120,
  maxEmailLength: 160,
  maxPhoneLength: 60,
  maxOrganizationLength: 160,
  maxSubjectLength: 180,
  maxMessageLength: 4000,
} as const;

export type ContactFormField =
  | "name"
  | "email"
  | "phone"
  | "organization"
  | "subject"
  | "message";

export type ContactFormPayload = {
  locale: Locale;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  subject: string;
  message: string;
  companyWebsite?: string;
  startedAtMs?: number;
};

export type ContactFormFieldErrors = Partial<
  Record<ContactFormField, string>
>;

export type ContactFormResponse =
  | {
      ok: true;
      message: string;
    }
  | {
      ok: false;
      message: string;
      fieldErrors?: ContactFormFieldErrors;
    };
