import { HomeCertidocsFocus } from "@/components/sections/home-certidocs-focus";
import { HomeChallenges } from "@/components/sections/home-challenges";
import { HomeCTA } from "@/components/sections/home-cta";
import { HomeExpertises } from "@/components/sections/home-expertises";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeNews } from "@/components/sections/home-news";
import { HomePartners } from "@/components/sections/home-partners";
import { HomeProcess } from "@/components/sections/home-process";
import { HomeSectors } from "@/components/sections/home-sectors";
import { HomeSolutions } from "@/components/sections/home-solutions";
import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Sécurité documentaire et traçabilité numérique",
  description:
    "PROOFTAG-CATIS accompagne les administrations, centres techniques et organisations dans la sécurisation, la vérification et la traçabilité des opérations sensibles.",
  pathname: "/",
});
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HomeHero />
      <HomeChallenges />
      <HomeSolutions />
      <HomeCertidocsFocus />
      <HomeExpertises />
      <HomeSectors />
      <HomeProcess />
      <HomePartners />
      <HomeNews />
      <HomeCTA />
    </main>
  );
}