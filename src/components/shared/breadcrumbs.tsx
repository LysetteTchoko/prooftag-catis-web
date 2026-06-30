"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

import { cn } from "@/lib/utils";

const segmentLabels: Record<string, string> = {
  entreprise: "Entreprise",
  expertises: "Expertises",
  solutions: "Solutions",
  secteurs: "Secteurs",
  actualites: "Actualités",
  contact: "Contact",
  carriere: "Carrière",
  "mentions-legales": "Mentions légales",
  confidentialite: "Confidentialité",

  "certidocs-ct": "Certidocs CT",
  "ct-verif": "CT-VERIF",
  doser: "DOSER",

  "securite-documentaire": "Sécurité documentaire",
  "securite-routiere": "Sécurité routière",
  "verification-numerique": "Vérification numérique",
  "analyse-donnees": "Analyse de données",
  "support-accompagnement": "Support & accompagnement",

  "administrations-publiques": "Administrations publiques",
  "transport-mobilite": "Transport & mobilité",
  "organisations-reglementees": "Organisations réglementées",
  "donnees-pilotage": "Données & pilotage",

  "enjeux-securite-documentaire": "Enjeux de la sécurité documentaire",
  "verification-numerique-processus-sensibles":
    "Vérification numérique dans les processus sensibles",
  "tracabilite-donnees-operations-critiques":
    "Traçabilité et données",
  "confiance-numerique-environnements-reglementes":
    "Confiance numérique",
};

function formatSegment(segment: string) {
  return (
    segmentLabels[segment] ??
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

type BreadcrumbsProps = {
  className?: string;
};

export function Breadcrumbs({ className }: BreadcrumbsProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const items = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;

    return {
      href,
      label: formatSegment(segment),
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
        href="/"
        className="inline-flex items-center gap-2 transition hover:text-primary"
      >
        <Home className="h-4 w-4" />
        Accueil
      </Link>

      {items.map((item) => (
        <div key={item.href} className="inline-flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-muted" aria-hidden="true" />

          {item.isLast ? (
            <span
              aria-current="page"
              className="font-medium text-foreground"
            >
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="transition hover:text-primary"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}