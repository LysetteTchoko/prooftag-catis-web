"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/layout/container";
import { company } from "@/constants/company";
import { footerNavigation } from "@/constants/navigation";
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
                src="/images/brand/prooftag-catis-logo.png"
                alt={company.name}
                width={180}
                height={52}
                className="h-auto w-[170px]"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              {company.description}
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
      </Container>
    </footer>
  );
}

type FooterColumnProps = {
  title: LocalizedString;
  links: {
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