import type { Metadata } from "next";

import { HomeCertidocsFocus } from "@/components/sections/home-certidocs-focus";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeSectors } from "@/components/sections/home-sectors";
import { HomeSolutions } from "@/components/sections/home-solutions";
import { createLocalizedMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

const pageMetadata = {
  title: {
    fr: "Sécurité documentaire et traçabilité numérique",
    en: "Document security and digital traceability",
  },
  description: {
    fr: "PROOFTAG CATIS conçoit des solutions numériques pour sécuriser les documents, vérifier les informations et tracer les processus liés au contrôle technique.",
    en: "PROOFTAG CATIS designs digital solutions to secure documents, verify information and trace vehicle inspection processes.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createLocalizedMetadata({
    ...pageMetadata,
    pathname: "/",
    locale,
  });
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HomeHero />
      <HomeSolutions />
      <HomeCertidocsFocus />
      <HomeSectors />
    </main>
  );
}
