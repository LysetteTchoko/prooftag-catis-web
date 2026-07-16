import type { Metadata } from "next";

import { SectorsPageContent } from "@/components/pages/sectors-page-content";
import { createLocalizedMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

const pageMetadata = {
  title: {
    fr: "Secteurs d'application",
    en: "Sectors",
  },
  description: {
    fr: "Découvrez les secteurs dans lesquels les solutions PROOFTAG CATIS peuvent renforcer la sécurité, la vérification et la traçabilité.",
    en: "Discover the sectors where PROOFTAG CATIS solutions can strengthen security, verification and traceability.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createLocalizedMetadata({
    ...pageMetadata,
    pathname: "/secteurs",
    locale,
  });
}

export default function SecteursPage() {
  return <SectorsPageContent />;
}
