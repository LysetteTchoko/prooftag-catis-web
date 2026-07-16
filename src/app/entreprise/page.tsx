import type { Metadata } from "next";

import { CompanyPageContent } from "@/components/pages/company-page-content";
import { createLocalizedMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

const pageMetadata = {
  title: {
    fr: "Entreprise",
    en: "Company",
  },
  description: {
    fr: "Découvrez PROOFTAG CATIS, acteur camerounais du contrôle technique, de la sécurité documentaire, de la traçabilité et de la sécurité routière.",
    en: "Discover PROOFTAG CATIS, a Cameroonian player in vehicle inspection, document security, traceability and road safety.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createLocalizedMetadata({
    ...pageMetadata,
    pathname: "/entreprise",
    locale,
  });
}

export default function EntreprisePage() {
  return <CompanyPageContent />;
}
