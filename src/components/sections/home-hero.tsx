"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileCheck2,
  QrCode,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  homeHeroContent,
  homeHeroProcessItems,
  homeHeroTrustItems,
} from "@/data/home-hero";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

const trustIcons = {
  security: ShieldCheck,
  verification: QrCode,
  traceability: FileCheck2,
};

const processIcons = {
  document: FileCheck2,
  qr: QrCode,
  auth: ShieldCheck,
};

export function HomeHero() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section spacing="lg" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(20,165,245,0.18),transparent_35%),radial-gradient(circle_at_top_left,rgba(11,61,145,0.12),transparent_30%)]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge variant="accent">{t(homeHeroContent.eyebrow)}</Badge>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              {t(homeHeroContent.title)}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {t(homeHeroContent.description)}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href={localizePathname("/solutions", locale)}>
                  {t(homeHeroContent.primaryCta)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href={localizePathname("/contact", locale)}>
                  {t(homeHeroContent.secondaryCta)}
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {homeHeroTrustItems.map((item) => {
                const Icon = trustIcons[item.icon];

                return (
                  <div
                    key={item.icon}
                    className="rounded-lg border border-border bg-surface/80 p-4 shadow-card backdrop-blur"
                  >
                    <Icon className="h-5 w-5 text-accent" />

                    <p className="mt-3 text-sm font-semibold text-foreground">
                      {t(item.title)}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      {t(item.description)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <Card padding="lg" className="relative overflow-hidden">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-start justify-between gap-6 border-b border-border pb-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {t(homeHeroContent.featuredLabel)}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-foreground">
                    {t(homeHeroContent.featuredTitle)}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {t(homeHeroContent.featuredDescription)}
                  </p>
                </div>

                <Badge variant="primary">
                  {t(homeHeroContent.verifiedLabel)}
                </Badge>
              </div>

              <div className="mt-8 space-y-4">
                {homeHeroProcessItems.map((item) => {
                  const Icon = processIcons[item.icon];

                  return (
                    <HeroProcessItem
                      key={item.icon}
                      icon={Icon}
                      title={t(item.title)}
                      description={t(item.description)}
                    />
                  );
                })}
              </div>

              <div className="mt-8 rounded-lg bg-surface-muted p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <QrCode className="h-9 w-9" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t(homeHeroContent.verificationTitle)}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted">
                      {t(homeHeroContent.verificationDescription)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

type HeroProcessItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function HeroProcessItem({
  icon: Icon,
  title,
  description,
}: HeroProcessItemProps) {
  return (
    <div className="flex gap-4 rounded-lg border border-border bg-surface-muted p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface text-accent">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
      </div>
    </div>
  );
}