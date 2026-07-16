"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Newspaper } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { NewsItem } from "@/data/news";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

const pageContent = {
  back: {
    fr: "Retour aux actualités",
    en: "Back to news",
  },
  takeaways: {
    fr: "Points à retenir",
    en: "Key takeaways",
  },
  aboutTitle: {
    fr: "À propos de cette ressource",
    en: "About this resource",
  },
  aboutDescription: {
    fr: "Cette ressource est un contenu éditorial générique préparé pour structurer le module Actualités. Elle pourra être remplacée plus tard par un vrai article officiel validé par PROOFTAG CATIS.",
    en: "This resource is generic editorial content prepared to structure the News module. It can later be replaced by an official article validated by PROOFTAG CATIS.",
  },
  contactTitle: {
    fr: "Besoin d’informations ?",
    en: "Need information?",
  },
  contactDescription: {
    fr: "Pour en savoir plus sur les solutions PROOFTAG CATIS, contactez l’équipe.",
    en: "To learn more about PROOFTAG CATIS solutions, contact the team.",
  },
  contactButton: {
    fr: "Contacter l’équipe",
    en: "Contact the team",
  },
} as const;

type NewsDetailContentProps = {
  item: NewsItem;
};

export function NewsDetailContent({ item }: NewsDetailContentProps) {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow={t(item.category)}
        title={t(item.title)}
        description={t(item.description)}
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <article>
              <Button asChild variant="ghost" className="-ml-3">
                <Link href={localizePathname("/actualites", locale)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t(pageContent.back)}
                </Link>
              </Button>

              <Card padding="lg" className="mt-8">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="outline">{t(item.category)}</Badge>
                  <Badge variant="accent">{t(item.type)}</Badge>
                </div>

                <div className="mt-8 space-y-6">
                  {item.content.map((paragraph) => (
                    <p
                      key={t(paragraph)}
                      className="text-base leading-8 text-muted"
                    >
                      {t(paragraph)}
                    </p>
                  ))}
                </div>
              </Card>
            </article>

            <aside className="grid gap-6">
              <Card padding="lg">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Newspaper className="h-6 w-6" />
                  </div>

                  <CardTitle className="mt-6">
                    {t(pageContent.takeaways)}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4">
                    {item.takeaways.map((takeaway) => (
                      <li
                        key={t(takeaway)}
                        className="flex gap-3 text-sm leading-7 text-muted"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                        <span>{t(takeaway)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card padding="lg" variant="muted">
                <CardHeader>
                  <CardTitle>{t(pageContent.aboutTitle)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    {t(pageContent.aboutDescription)}
                  </p>
                </CardContent>
              </Card>

              <Card padding="lg">
                <CardHeader>
                  <CardTitle>{t(pageContent.contactTitle)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    {t(pageContent.contactDescription)}
                  </p>

                  <div className="mt-6">
                    <Button asChild>
                      <Link href={localizePathname("/contact", locale)}>
                        {t(pageContent.contactButton)}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>
    </main>
  );
}
