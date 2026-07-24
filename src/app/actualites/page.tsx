import type { Metadata } from "next";

import { NewsPageContent } from "@/components/pages/news-page-content";
import { createLocalizedMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

const pageMetadata = {
  title: {
    fr: "Ressources",
    en: "Resources",
  },
  description: {
    fr: "Consultez des contenus de référence sur la sécurité documentaire, la vérification numérique, la traçabilité et la confiance numérique.",
    en: "Explore reference content on document security, digital verification, traceability and digital trust.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createLocalizedMetadata({
    ...pageMetadata,
    pathname: "/actualites",
    locale,
  });
}

export default function ActualitesPage() {
  return <NewsPageContent />;
}
