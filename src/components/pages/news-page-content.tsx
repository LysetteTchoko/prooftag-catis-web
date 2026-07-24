"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  FileCheck2,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

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
    fr: "Ressources",
    en: "Resources",
  },
  title: {
    fr: "Des contenus de référence pour mieux comprendre les enjeux métier.",
    en: "Reference content to better understand business challenges.",
  },
  description: {
    fr: "Cette rubrique rassemble des analyses, repères opérationnels et informations utiles autour de la sécurité documentaire, de la vérification numérique, de la traçabilité et du pilotage des données.",
    en: "This section brings together insights, operational guides and useful information on document security, digital verification, traceability and data management.",
  },
  read: {
    fr: "Lire la ressource",
    en: "Read resource",
  },
} as const;

const resourceIcons = {
  "enjeux-securite-documentaire": FileCheck2,
  "verification-numerique-processus-sensibles": ScanSearch,
  "tracabilite-donnees-operations-critiques": BarChart3,
  "confiance-numerique-environnements-reglementes": ShieldCheck,
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
                <Card key={item.slug} padding="lg" className="flex h-full flex-col">
                <CardHeader>
                  <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-[linear-gradient(135deg,#f6fbff_0%,#ffffff_52%,#edf8ff_100%)] p-5 shadow-sm">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-accent/70 to-primary/30" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <Badge variant="outline">{t(item.category)}</Badge>
                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                          {t(item.editorialLabel)}
                        </p>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
                        {(() => {
                          const Icon = resourceIcons[item.slug] ?? BookOpen;

                          return <Icon className="h-6 w-6" />;
                        })()}
                      </div>
                    </div>

                    <div className="relative mt-5 grid grid-cols-[1fr_4.75rem] gap-4">
                      <div className="space-y-2">
                        <span className="block h-2.5 rounded-full bg-primary/15" />
                        <span className="block h-2.5 w-5/6 rounded-full bg-slate-200" />
                        <span className="block h-2.5 w-2/3 rounded-full bg-accent/15" />
                      </div>

                      <div className="grid grid-cols-3 items-end gap-1.5 rounded-lg border border-border bg-white p-2 shadow-sm">
                        <span className="h-6 rounded-t bg-primary/20" />
                        <span className="h-10 rounded-t bg-primary/40" />
                        <span className="h-8 rounded-t bg-accent/25" />
                      </div>
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
