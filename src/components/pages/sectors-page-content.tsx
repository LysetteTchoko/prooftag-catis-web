"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CarFront,
  CheckCircle2,
  FileCheck2,
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
import { sectors } from "@/data/sectors";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

const sectorIcons = {
  administration: Building2,
  mobility: CarFront,
  regulated: FileCheck2,
  data: BarChart3,
};

const pageContent = {
  eyebrow: {
    fr: "Secteurs",
    en: "Sectors",
  },
  title: {
    fr: "Des usages distincts selon les acteurs et les opérations.",
    en: "Distinct uses according to stakeholders and operations.",
  },
  description: {
    fr: "Chaque secteur n’a pas le même besoin : supervision publique, contrôle technique, preuve réglementée ou pilotage des données. Cette rubrique clarifie les contextes d’application.",
    en: "Each sector has a different need: public supervision, vehicle inspection, regulated proof or data management. This section clarifies the application contexts.",
  },
  featuredBadge: {
    fr: "Secteur clé",
    en: "Key sector",
  },
  defaultBadge: {
    fr: "Secteur",
    en: "Sector",
  },
  explore: {
    fr: "Explorer ce secteur",
    en: "Explore this sector",
  },
  concernedActors: {
    fr: "Acteurs concernés",
    en: "Stakeholders involved",
  },
  operationalScope: {
    fr: "Périmètre opérationnel",
    en: "Operational scope",
  },
} as const;

export function SectorsPageContent() {
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
          <div className="grid gap-6 lg:grid-cols-2">
            {sectors.map((sector) => {
              const Icon = sectorIcons[sector.icon];

              return (
                <Card
                  key={sector.slug}
                  padding="lg"
                  className={cn(
                    "flex h-full flex-col",
                    sector.featured &&
                      "border-primary/20 bg-gradient-to-br from-surface to-primary/5"
                  )}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      <Badge variant={sector.featured ? "primary" : "outline"}>
                        {sector.featured
                          ? t(pageContent.featuredBadge)
                          : t(pageContent.defaultBadge)}
                      </Badge>
                    </div>

                    <CardTitle className="mt-6">
                      {t(sector.title)}
                    </CardTitle>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {t(sector.description)}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {sector.points.map((point) => (
                        <li
                          key={t(point)}
                          className="flex gap-3 text-sm leading-6 text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span>{t(point)}</span>
                        </li>
                      ))}
                    </ul>

                    {"actors" in sector ? (
                      <div className="mt-6">
                        <p className="text-sm font-semibold text-foreground">
                          {t(pageContent.concernedActors)}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {sector.actors.map((actor) => (
                            <Badge
                              key={t(actor)}
                              variant="outline"
                              className="normal-case leading-5 tracking-normal"
                            >
                              {t(actor)}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {"operationalScope" in sector ? (
                      <div className="mt-6 rounded-lg border border-border bg-background p-4">
                        <p className="text-sm font-semibold text-foreground">
                          {t(pageContent.operationalScope)}
                        </p>

                        <ul className="mt-3 space-y-3">
                          {sector.operationalScope.map((item) => (
                            <li
                              key={t(item)}
                              className="flex gap-3 text-sm leading-6 text-muted"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                              <span>{t(item)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </CardContent>

                  <CardFooter>
                    <Button
                      asChild
                      variant={sector.featured ? "primary" : "outline"}
                    >
                      <Link href={localizePathname(sector.href, locale)}>
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
