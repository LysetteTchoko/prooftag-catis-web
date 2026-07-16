import type { Metadata } from "next";

import { CareersPageContent } from "@/components/pages/careers-page-content";
import { createLocalizedMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

const pageMetadata = {
  title: {
    fr: "Carrière",
    en: "Careers",
  },
  description: {
    fr: "Découvrez les possibilités de collaboration avec PROOFTAG CATIS autour des solutions numériques, de la donnée et de la sécurité documentaire.",
    en: "Discover collaboration possibilities with PROOFTAG CATIS around digital solutions, data and document security.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createLocalizedMetadata({
    ...pageMetadata,
    pathname: "/carriere",
    locale,
  });
}

export default function CarrierePage() {
  return <CareersPageContent />;
}
