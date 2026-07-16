"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, SearchX } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getLocaleFromPathname,
  getLocalizedString,
  localizePathname,
} from "@/lib/i18n";

const pageContent = {
  eyebrow: {
    fr: "Erreur 404",
    en: "404 error",
  },
  title: {
    fr: "Page introuvable",
    en: "Page not found",
  },
  description: {
    fr: "La page que vous recherchez n’existe pas ou a été déplacée. Vous pouvez revenir à l’accueil pour continuer votre navigation.",
    en: "The page you are looking for does not exist or has been moved. You can return home to continue browsing.",
  },
  backHome: {
    fr: "Retour à l’accueil",
    en: "Back home",
  },
} as const;

export default function NotFound() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <main className="min-h-screen bg-background">
      <Section spacing="lg">
        <Container size="md">
          <Card padding="lg" className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <SearchX className="h-8 w-8" />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              {getLocalizedString(pageContent.eyebrow, locale)}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {getLocalizedString(pageContent.title, locale)}
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
              {getLocalizedString(pageContent.description, locale)}
            </p>

            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link href={localizePathname("/", locale)}>
                  <Home className="mr-2 h-4 w-4" />
                  {getLocalizedString(pageContent.backHome, locale)}
                </Link>
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
