import type { Metadata } from "next";

import { SolutionsPageContent } from "@/components/pages/solutions-page-content";
import { createLocalizedMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

const pageMetadata = {
  title: {
    fr: "Solutions",
    en: "Solutions",
  },
  description: {
    fr: "Découvrez Certidocs CT, CT-VERIF et DOSER, les solutions PROOFTAG CATIS pour sécuriser les documents, vérifier les informations et exploiter les données.",
    en: "Discover Certidocs CT, CT-VERIF and DOSER, PROOFTAG CATIS solutions for securing documents, verifying information and using data.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createLocalizedMetadata({
    ...pageMetadata,
    pathname: "/solutions",
    locale,
  });
}

export default function SolutionsPage() {
  return <SolutionsPageContent />;
}
