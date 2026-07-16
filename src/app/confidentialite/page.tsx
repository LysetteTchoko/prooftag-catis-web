import type { Metadata } from "next";

import { PrivacyPageContent } from "@/components/pages/privacy-page-content";
import { createLocalizedMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

const pageMetadata = {
  title: {
    fr: "Confidentialité",
    en: "Privacy",
  },
  description: {
    fr: "Consultez les principes de confidentialité appliqués aux informations transmises via le site PROOFTAG CATIS.",
    en: "View the privacy principles applied to information submitted through the PROOFTAG CATIS website.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createLocalizedMetadata({
    ...pageMetadata,
    pathname: "/confidentialite",
    locale,
  });
}

export default function ConfidentialitePage() {
  return <PrivacyPageContent />;
}
