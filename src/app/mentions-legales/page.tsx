import type { Metadata } from "next";

import { LegalNoticePageContent } from "@/components/pages/legal-notice-page-content";
import { createLocalizedMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

const pageMetadata = {
  title: {
    fr: "Mentions légales",
    en: "Legal notice",
  },
  description: {
    fr: "Consultez les informations légales et les coordonnées de contact du site PROOFTAG CATIS.",
    en: "View the legal information and contact details for the PROOFTAG CATIS website.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createLocalizedMetadata({
    ...pageMetadata,
    pathname: "/mentions-legales",
    locale,
  });
}

export default function MentionsLegalesPage() {
  return <LegalNoticePageContent />;
}
