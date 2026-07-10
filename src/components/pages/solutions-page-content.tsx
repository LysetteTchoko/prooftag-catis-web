"use client";

import Link from "next/link";
import {
  ArrowRight,
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
import { solutions } from "@/data/solutions";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

const solutionIcons = {
  certidocs: ShieldCheck,
  verif: ScanSearch,
  doser: ClipboardCheck,
};

const pageContent = {
  eyebrow: {
    fr: "Solutions",
    en: "Solutions",
  },
  title: {
    fr: "Des solutions numériques pour sécuriser, vérifier et tracer.",
    en: "Digital solutions to secure, verify and trace.",
  },
  description: {
    fr: "PROOFTAG CATIS développe des solutions adaptées aux environnements sensibles, avec une attention particulière portée à la sécurité documentaire, à la vérification numérique et à la traçabilité.",
    en: "PROOFTAG CATIS develops solutions for sensitive environments, with a strong focus on document security, digital verification and traceability.",
  },
  discover: {
    fr: "Découvrir",
    en: "Explore",
  },
} as const;

export function SolutionsPageContent() {
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
            {solutions.map((solution) => {
              const Icon = solutionIcons[solution.icon];

              return (
                <Card
                  key={solution.slug}
                  className={cn(
                    "flex h-full flex-col",
                    solution.featured &&
                      "border-primary/20 bg-gradient-to-br from-surface to-primary/5"
                  )}
                  padding="lg"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      <Badge variant={solution.featured ? "primary" : "outline"}>
                        {t(solution.tag)}
                      </Badge>
                    </div>

                    <CardTitle className="mt-6">{solution.name}</CardTitle>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {t(solution.description)}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {solution.points.map((point) => (
                        <li
                          key={t(point)}
                          className="flex gap-3 text-sm leading-6 text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span>{t(point)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      asChild
                      variant={solution.featured ? "primary" : "outline"}
                    >
                      <Link href={localizePathname(solution.href, locale)}>
                        {t(pageContent.discover)} {solution.name}
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