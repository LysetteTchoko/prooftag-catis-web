import type { Metadata } from "next";

import { ContactPageContent } from "@/components/pages/contact-page-content";
import { createLocalizedMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

const pageMetadata = {
  title: {
    fr: "Contact",
    en: "Contact",
  },
  description: {
    fr: "Contactez PROOFTAG CATIS pour échanger sur vos besoins en sécurité documentaire, vérification numérique, traçabilité ou contrôle technique.",
    en: "Contact PROOFTAG CATIS to discuss your needs in document security, digital verification, traceability or vehicle inspection.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createLocalizedMetadata({
    ...pageMetadata,
    pathname: "/contact",
    locale,
  });
}

export default function ContactPage() {
  return <ContactPageContent />;
}
