import type { Metadata } from "next";

import { NewsPageContent } from "@/components/pages/news-page-content";
import { createLocalizedMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

const pageMetadata = {
  title: {
    fr: "Actualités & ressources",
    en: "News & resources",
  },
  description: {
    fr: "Suivez les ressources liées à la sécurité documentaire, à la vérification numérique, à la traçabilité et à la confiance numérique.",
    en: "Follow resources related to document security, digital verification, traceability and digital trust.",
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
