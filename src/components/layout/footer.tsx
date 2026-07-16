"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/layout/container";
import { company } from "@/constants/company";
import { footerNavigation, socialNavigation } from "@/constants/navigation";
import {
  getLocaleFromPathname,
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

const footerLabels = {
  company: {
    fr: "Entreprise",
    en: "Company",
  },
  expertise: {
    fr: "Expertises",
    en: "Expertise",
  },
  solutions: {
    fr: "Solutions",
    en: "Solutions",
  },
  rights: {
    fr: "Tous droits réservés.",
    en: "All rights reserved.",
  },
  legal: {
    fr: "Mentions légales",
    en: "Legal notice",
  },
  privacy: {
    fr: "Confidentialité",
    en: "Privacy",
  },
  social: {
    fr: "Suivez-nous",
    en: "Follow us",
  },
};

export function Footer() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link
              href={localizePathname("/", currentLocale)}
              className="inline-flex"
            >
              <Image
                src="/images/brand/prooftag-catis-logo-classic.jpg"
                alt={company.name}
                width={150}
                height={88}
                className="h-auto w-[130px]"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              {getLocalizedString(company.description, currentLocale)}
            </p>

            <div className="mt-6 space-y-2 text-sm text-muted">
              <p>{company.address}</p>
              <p>{company.email}</p>
              <p>{company.phone}</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <FooterColumn
              title={footerLabels.company}
              links={footerNavigation.company}
              locale={currentLocale}
            />

            <FooterColumn
              title={footerLabels.expertise}
              links={footerNavigation.expertise}
              locale={currentLocale}
            />

            <FooterColumn
              title={footerLabels.solutions}
              links={footerNavigation.solutions}
              locale={currentLocale}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}.{" "}
            {getLocalizedString(footerLabels.rights, currentLocale)}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                {getLocalizedString(footerLabels.social, currentLocale)}
              </span>

              <div className="flex items-center gap-2">
                {socialNavigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary hover:bg-background hover:text-primary"
                  >
                    <SocialIcon label={item.label} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex gap-5">
              <Link
                href={localizePathname("/mentions-legales", currentLocale)}
                className="transition hover:text-primary"
              >
                {getLocalizedString(footerLabels.legal, currentLocale)}
              </Link>

              <Link
                href={localizePathname("/confidentialite", currentLocale)}
                className="transition hover:text-primary"
              >
                {getLocalizedString(footerLabels.privacy, currentLocale)}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v5h4v-5h3.3l.7-4h-4V9c0-.6.4-1 1-1Z"
        />
      </svg>
    );
  }

  if (label === "X / Twitter") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.9 3h3.2l-7 8 8.2 10h-6.4l-5-6.2L6.2 21H2.9l7.5-8.6L2.5 3h6.5l4.5 5.6L18.9 3Zm-1.1 16.2h1.8L8.1 4.7H6.2l11.6 14.5Z"
        />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.5 8.9H3.3V21h3.2V8.9ZM4.9 3C3.8 3 3 3.8 3 4.8s.8 1.8 1.9 1.8 1.9-.8 1.9-1.8S6 3 4.9 3Zm16.1 11c0-3.3-1.8-5.3-4.4-5.3-2 0-3 1.1-3.5 1.9V8.9H9.9V21h3.2v-6.1c0-1.6.3-3.1 2.3-3.1 1.9 0 1.9 1.8 1.9 3.2v6H21v-7Z"
        />
      </svg>
    );
  }

  if (label === "YouTube") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21.6 7.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C15.7 3.7 12 3.7 12 3.7s-3.7 0-6.7.2c-.4.1-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S2.2 9.1 2.2 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.8 2.3c.8.9 1.8.9 2.3 1 1.7.2 6.5.2 6.5.2s3.7 0 6.7-.2c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8Zm-11 7.6V8.7l5.8 3.1-5.8 3Z"
        />
      </svg>
    );
  }

  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.5 11.8a8.5 8.5 0 0 1-12.7 7.4L3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 20.5 11.8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.1 8.4c.2-.5.4-.5.7-.5h.6c.2 0 .5.1.6.5l.6 1.4c.1.3 0 .5-.2.7l-.4.5c.7 1.2 1.6 2.1 2.9 2.8l.5-.5c.2-.2.5-.3.8-.2l1.4.6c.4.2.5.4.5.7v.6c0 .3 0 .5-.5.7-.5.2-1 .3-1.5.3-3.5 0-7-3.4-7-7 0-.5.1-1 .3-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

type FooterColumnProps = {
  title: LocalizedString;
  links: readonly {
    label: LocalizedString;
    href: string;
  }[];
  locale: "fr" | "en";
};

function FooterColumn({ title, links, locale }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
        {getLocalizedString(title, locale)}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={localizePathname(link.href, locale)}
              className="text-sm text-muted transition hover:text-primary"
            >
              {getLocalizedString(link.label, locale)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
