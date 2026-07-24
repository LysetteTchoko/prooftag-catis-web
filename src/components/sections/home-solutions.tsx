"use client";

import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { SolutionSignature } from "@/components/shared/solution-signature";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  homeSolutionsContent,
  homeSolutionsItems,
} from "@/data/home-solutions";
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

export function HomeSolutions() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section spacing="md">
      <Container>
        <SectionHeader
          eyebrow={t(homeSolutionsContent.eyebrow)}
          title={t(homeSolutionsContent.title)}
          description={t(homeSolutionsContent.description)}
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {homeSolutionsItems.map((solution) => {
            const Icon = solutionIcons[solution.icon];

            return (
              <Card
                key={solution.name}
                className={cn(
                  "flex h-full flex-col p-6",
                  solution.featured && "border-primary/25 bg-primary/5"
                )}
              >
                <SolutionSignature
                  variant={solution.icon}
                  className="mb-1"
                />

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

                  <CardDescription>{t(solution.description)}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted">
                    {solution.points.slice(0, 2).map((point) => (
                      <li key={t(point)} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {t(point)}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    variant={solution.featured ? "primary" : "outline"}
                    size="sm"
                  >
                    <Link href={localizePathname(solution.href, locale)}>
                      {t(homeSolutionsContent.learnMore)}
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
  );
}
