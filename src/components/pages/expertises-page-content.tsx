"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CarFront,
  CheckCircle2,
  ClipboardCheck,
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
import { expertises } from "@/data/expertises";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

const expertiseIcons = {
  security: ShieldCheck,
  road: CarFront,
  verification: ScanSearch,
  data: BarChart3,
  support: ClipboardCheck,
};

const pageContent = {
  eyebrow: {
    fr: "Expertises",
    en: "Expertise",
  },
  title: {
    fr: "Cinq expertises complémentaires, chacune avec un rôle précis.",
    en: "Five complementary areas of expertise, each with a precise role.",
  },
  description: {
    fr: "Sécuriser un document, fiabiliser une visite technique, vérifier sur le terrain, exploiter les données ou accompagner les équipes ne relèvent pas du même métier. Cette rubrique clarifie chaque savoir-faire.",
    en: "Securing a document, making an inspection more reliable, checking in the field, using data or supporting teams are different disciplines. This section clarifies each one.",
  },
  featuredBadge: {
    fr: "Expertise clé",
    en: "Key expertise",
  },
  defaultBadge: {
    fr: "Expertise",
    en: "Expertise",
  },
  explore: {
    fr: "Explorer",
    en: "Explore",
  },
  businessFocus: {
    fr: "Axes métier",
    en: "Business focus",
  },
} as const;

export function ExpertisesPageContent() {
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
          <div className="grid gap-6 lg:grid-cols-3">
            {expertises.map((expertise) => {
              const Icon = expertiseIcons[expertise.icon];

              return (
                <Card
                  key={expertise.slug}
                  padding="lg"
                  className={cn(
                    "flex h-full flex-col",
                    expertise.featured &&
                      "border-primary/20 bg-gradient-to-br from-surface to-primary/5 lg:col-span-2"
                  )}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      <Badge variant={expertise.featured ? "primary" : "outline"}>
                        {expertise.featured
                          ? t(pageContent.featuredBadge)
                          : t(pageContent.defaultBadge)}
                      </Badge>
                    </div>

                    <CardTitle className="mt-6">
                      {t(expertise.title)}
                    </CardTitle>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {t(expertise.description)}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {expertise.points.map((point) => (
                        <li
                          key={t(point)}
                          className="flex gap-3 text-sm leading-6 text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span>{t(point)}</span>
                        </li>
                      ))}
                    </ul>

                    {"businessFocus" in expertise ? (
                      <div className="mt-6 rounded-lg border border-border bg-background p-4">
                        <p className="text-sm font-semibold text-foreground">
                          {t(pageContent.businessFocus)}
                        </p>

                        <ul className="mt-3 space-y-3">
                          {expertise.businessFocus.map((item) => (
                            <li
                              key={t(item)}
                              className="flex gap-3 text-sm leading-6 text-muted"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                              <span>{t(item)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </CardContent>

                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link href={localizePathname(expertise.href, locale)}>
                        {t(pageContent.explore)}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
    </main>
  );
}
