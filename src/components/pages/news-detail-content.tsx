"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";

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
    fr: "Retour aux ressources",
    en: "Back to resources",
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
    fr: "Cette page est une ressource éditoriale de référence. Elle ne constitue pas une annonce d’entreprise datée et pourra être enrichie plus tard avec des publications officielles validées.",
    en: "This page is a reference editorial resource. It is not a dated company announcement and may later be expanded with validated official publications.",
  },
  conclusionTitle: {
    fr: "Conclusion",
    en: "Conclusion",
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
                  <Badge variant="outline">{t(item.editorialLabel)}</Badge>
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

                <div className="mt-8 rounded-xl border border-primary/15 bg-primary/5 p-5">
                  <p className="text-sm font-semibold text-foreground">
                    {t(pageContent.conclusionTitle)}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {t(item.conclusion)}
                  </p>
                </div>
              </Card>
            </article>

            <aside className="grid gap-6">
              <Card padding="lg">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="h-6 w-6" />
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

            </aside>
          </div>
        </Container>
      </Section>
    </main>
  );
}
