"use client";

import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { news } from "@/data/news";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

const pageContent = {
  eyebrow: {
    fr: "Actualités & ressources",
    en: "News & resources",
  },
  title: {
    fr: "Suivre les sujets liés à la sécurité et à la confiance numérique.",
    en: "Follow topics related to security and digital trust.",
  },
  description: {
    fr: "Retrouvez les contenus liés à la sécurité documentaire, à la vérification numérique, à la traçabilité et aux solutions PROOFTAG CATIS.",
    en: "Explore content related to document security, digital verification, traceability and PROOFTAG CATIS solutions.",
  },
  read: {
    fr: "Lire la ressource",
    en: "Read resource",
  },
} as const;

export function NewsPageContent() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow={t(pageContent.eyebrow)}
        title={t(pageContent.title)}
        description={t(pageContent.description)}
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {news.map((item) => (
              <Card
                key={item.slug}
                padding="lg"
                className="flex h-full flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <Badge variant="outline">{t(item.category)}</Badge>

                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Newspaper className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Badge variant="accent">{t(item.type)}</Badge>
                  </div>

                  <CardTitle className="mt-5">{t(item.title)}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-sm leading-7 text-muted">
                    {t(item.description)}
                  </p>
                </CardContent>

                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href={localizePathname(item.href, locale)}>
                      {t(pageContent.read)}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
