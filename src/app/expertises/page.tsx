import type { Metadata } from "next";

import { ExpertisesPageContent } from "@/components/pages/expertises-page-content";
import { createLocalizedMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

const pageMetadata = {
  title: {
    fr: "Expertises",
    en: "Expertise",
  },
  description: {
    fr: "Découvrez les expertises PROOFTAG CATIS : sécurité documentaire, vérification numérique, sécurité routière, analyse de données et accompagnement technique.",
    en: "Discover PROOFTAG CATIS expertise: document security, digital verification, road safety, data analysis and technical support.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createLocalizedMetadata({
    ...pageMetadata,
    pathname: "/expertises",
    locale,
  });
}

export default function ExpertisesPage() {
  return <ExpertisesPageContent />;
}
