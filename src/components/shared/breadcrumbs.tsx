"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

import {
  getLocaleFromPathname,
  localizePathname,
  removeLocaleFromPathname,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

const segmentLabels: Record<string, { fr: string; en: string }> = {
  entreprise: {
    fr: "Entreprise",
    en: "Company",
  },
  expertises: {
    fr: "Expertises",
    en: "Expertise",
  },
  solutions: {
    fr: "Solutions",
    en: "Solutions",
  },
  secteurs: {
    fr: "Secteurs",
    en: "Sectors",
  },
  actualites: {
    fr: "Actualités",
    en: "News",
  },
  contact: {
    fr: "Contact",
    en: "Contact",
  },
  carriere: {
    fr: "Carrière",
    en: "Careers",
  },
  "mentions-legales": {
    fr: "Mentions légales",
    en: "Legal notice",
  },
  confidentialite: {
    fr: "Confidentialité",
    en: "Privacy",
  },

  "certidocs-ct": {
    fr: "Certidocs CT",
    en: "Certidocs CT",
  },
  "ct-verif": {
    fr: "CT-VERIF",
    en: "CT-VERIF",
  },
  doser: {
    fr: "DOSER",
    en: "DOSER",
  },

  "securite-documentaire": {
    fr: "Sécurité documentaire",
    en: "Document security",
  },
  "securite-routiere": {
    fr: "Sécurité routière",
    en: "Road safety",
  },
  "verification-numerique": {
    fr: "Vérification numérique",
    en: "Digital verification",
  },
  "analyse-donnees": {
    fr: "Analyse de données",
    en: "Data analysis",
  },
  "support-accompagnement": {
    fr: "Support & accompagnement",
    en: "Support & guidance",
  },

  "administrations-publiques": {
    fr: "Administrations publiques",
    en: "Public administrations",
  },
  "transport-mobilite": {
    fr: "Transport & mobilité",
    en: "Transport & mobility",
  },
  "organisations-reglementees": {
    fr: "Organisations réglementées",
    en: "Regulated organizations",
  },
  "donnees-pilotage": {
    fr: "Données & pilotage",
    en: "Data & management",
  },

  "enjeux-securite-documentaire": {
    fr: "Enjeux de la sécurité documentaire",
    en: "Document security challenges",
  },
  "verification-numerique-processus-sensibles": {
    fr: "Vérification numérique dans les processus sensibles",
    en: "Digital verification in sensitive processes",
  },
  "tracabilite-donnees-operations-critiques": {
    fr: "Traçabilité et données",
    en: "Traceability and data",
  },
  "confiance-numerique-environnements-reglementes": {
    fr: "Confiance numérique",
    en: "Digital trust",
  },
};
function formatSegment(segment: string, locale: "fr" | "en") {
  const label = segmentLabels[segment];

  if (label) {
    return label[locale];
  }

  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

type BreadcrumbsProps = {
  className?: string;
};

export function Breadcrumbs({ className }: BreadcrumbsProps) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const pathnameWithoutLocale = removeLocaleFromPathname(pathname);
  const segments = pathnameWithoutLocale.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const items = segments.map((segment, index) => {
    const hrefWithoutLocale = `/${segments.slice(0, index + 1).join("/")}`;

    return {
      href: localizePathname(hrefWithoutLocale, currentLocale),
      label: formatSegment(segment, currentLocale),
      isLast: index === segments.length - 1,
    };
  });

  return (
    <nav
      aria-label="Fil d’Ariane"
      className={cn(
        "mb-6 flex flex-wrap items-center gap-2 text-sm text-muted",
        className
      )}
    >
      <Link
        href={localizePathname("/", currentLocale)}
        className="inline-flex items-center gap-2 transition hover:text-primary"
      >
        <Home className="h-4 w-4" />
        {currentLocale === "fr" ? "Accueil" : "Home"}
      </Link>

      {items.map((item) => (
        <div key={item.href} className="inline-flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-muted" aria-hidden="true" />

          {item.isLast ? (
            <span aria-current="page" className="font-medium text-foreground">
              {item.label}
            </span>
          ) : (
            <Link href={item.href} className="transition hover:text-primary">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}