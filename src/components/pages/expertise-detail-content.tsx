"use client";

import Link from "next/link";
import {
  ArrowLeft,
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Expertise } from "@/data/expertises";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

const expertiseIcons = {
  security: ShieldCheck,
  road: CarFront,
  verification: ScanSearch,
  data: BarChart3,
  support: ClipboardCheck,
};

const pageContent = {
  back: {
    fr: "Retour aux expertises",
    en: "Back to expertise",
  },
  featuredBadge: {
    fr: "Expertise clé",
    en: "Key expertise",
  },
  defaultBadge: {
    fr: "Expertise",
    en: "Expertise",
  },
  contact: {
    fr: "Échanger avec l’équipe",
    en: "Talk to the team",
  },
  keyPoints: {
    fr: "Points clés",
    en: "Key points",
  },
  businessFocus: {
    fr: "Axes métier",
    en: "Business focus",
  },
  whyTitle: {
    fr: "Pourquoi cette expertise compte",
    en: "Why this expertise matters",
  },
  whyDescription: {
    fr: "Cette expertise permet à PROOFTAG CATIS de construire des solutions plus fiables, plus compréhensibles et mieux adaptées aux environnements où la sécurité, la vérification et la traçabilité sont essentielles.",
    en: "This expertise allows PROOFTAG CATIS to build solutions that are more reliable, easier to understand and better suited to environments where security, verification and traceability are essential.",
  },
  applicationsTitle: {
    fr: "Application dans les solutions",
    en: "Application in the solutions",
  },
  applicationsDescription: {
    fr: "Cette compétence peut être mobilisée dans les solutions Certidocs CT, CT-VERIF et DOSER, selon les besoins métier et les processus à sécuriser.",
    en: "This capability can be used in Certidocs CT, CT-VERIF and DOSER, depending on business needs and the processes to be secured.",
  },
} as const;

type ExpertiseDetailContentProps = {
  expertise: Expertise;
};

export function ExpertiseDetailContent({
  expertise,
}: ExpertiseDetailContentProps) {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  const Icon = expertiseIcons[expertise.icon];

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow={t(pageContent.defaultBadge)}
        title={t(expertise.title)}
        description={t(expertise.description)}
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Button asChild variant="ghost" className="-ml-3">
                <Link href={localizePathname("/expertises", locale)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t(pageContent.back)}
                </Link>
              </Button>

              <div className="mt-8 rounded-xl border border-border bg-surface p-6 shadow-card md:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>

                <Badge
                  variant={expertise.featured ? "primary" : "outline"}
                  className="mt-6"
                >
                  {expertise.featured
                    ? t(pageContent.featuredBadge)
                    : t(pageContent.defaultBadge)}
                </Badge>

                <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {t(expertise.title)}
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  {t(expertise.details)}
                </p>

                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href={localizePathname("/contact", locale)}>
                      {t(pageContent.contact)}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <Card padding="lg">
                <CardHeader>
                  <CardTitle>{t(pageContent.keyPoints)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4">
                    {expertise.points.map((point) => (
                      <li
                        key={t(point)}
                        className="flex gap-3 text-sm leading-7 text-muted"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                        <span>{t(point)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {"businessFocus" in expertise ? (
                <Card padding="lg">
                  <CardHeader>
                    <CardTitle>{t(pageContent.businessFocus)}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-4">
                      {expertise.businessFocus.map((item) => (
                        <li
                          key={t(item)}
                          className="flex gap-3 text-sm leading-7 text-muted"
                        >
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                          <span>{t(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ) : null}

              <Card padding="lg" variant="muted">
                <CardHeader>
                  <CardTitle>{t(pageContent.whyTitle)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    {t(pageContent.whyDescription)}
                  </p>
                </CardContent>
              </Card>

              <Card padding="lg">
                <CardHeader>
                  <CardTitle>{t(pageContent.applicationsTitle)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    {t(pageContent.applicationsDescription)}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
