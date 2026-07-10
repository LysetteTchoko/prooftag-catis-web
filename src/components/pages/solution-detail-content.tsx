"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

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
import type { Solution } from "@/data/solutions";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

const pageContent = {
  back: {
    fr: "Retour aux solutions",
    en: "Back to solutions",
  },
  requestInfo: {
    fr: "Demander des informations",
    en: "Request information",
  },
  benefits: {
    fr: "Bénéfices principaux",
    en: "Key benefits",
  },
  useCases: {
    fr: "Cas d’usage",
    en: "Use cases",
  },
  features: {
    fr: "Fonctionnalités mises en avant",
    en: "Highlighted features",
  },
} as const;

type SolutionDetailContentProps = {
  solution: Solution;
};

export function SolutionDetailContent({
  solution,
}: SolutionDetailContentProps) {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow={t(solution.tag)}
        title={solution.name}
        description={t(solution.headline)}
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Button asChild variant="ghost" className="-ml-3">
                <Link href={localizePathname("/solutions", locale)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t(pageContent.back)}
                </Link>
              </Button>

              <div className="mt-8 rounded-xl border border-border bg-surface p-8 shadow-card">
                <Badge variant={solution.featured ? "primary" : "outline"}>
                  {t(solution.tag)}
                </Badge>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
                  {t(solution.headline)}
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  {t(solution.description)}
                </p>

                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href={localizePathname("/contact", locale)}>
                      {t(pageContent.requestInfo)}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <Card padding="lg">
                <CardHeader>
                  <CardTitle>{t(pageContent.benefits)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4">
                    {solution.benefits.map((benefit) => (
                      <li
                        key={t(benefit)}
                        className="flex gap-3 text-sm leading-7 text-muted"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                        <span>{t(benefit)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card padding="lg" variant="muted">
                <CardHeader>
                  <CardTitle>{t(pageContent.useCases)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {solution.useCases.map((useCase) => (
                      <Badge key={t(useCase)} variant="outline">
                        {t(useCase)}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card padding="lg">
                <CardHeader>
                  <CardTitle>{t(pageContent.features)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-3">
                    {solution.points.map((point) => (
                      <li
                        key={t(point)}
                        className="rounded-lg border border-border bg-background p-4 text-sm font-medium text-foreground"
                      >
                        {t(point)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}