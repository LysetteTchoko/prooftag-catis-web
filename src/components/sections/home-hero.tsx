"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CarFront,
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
  center: CarFront,
  document: FileCheck2,
  qr: QrCode,
};

export function HomeHero() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section
      spacing="lg"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f7fbff_0%,#eef7ff_52%,#ffffff_100%)]"
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] xl:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Badge variant="accent">{t(homeHeroContent.eyebrow)}</Badge>

            <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-6xl">
              {t(homeHeroContent.title)}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {t(homeHeroContent.description)}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link
                  href={localizePathname(
                    "/solutions/certidocs-ct",
                    locale
                  )}
                >
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

          <Card
            padding="none"
            className="relative mx-auto w-full max-w-xl border-primary/10 bg-background/95 p-4 shadow-2xl sm:p-5 lg:max-w-none"
          >
            <div className="rounded-lg border border-border bg-surface">
              <div className="flex flex-col gap-4 border-b border-border p-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-accent">
                    {t(homeHeroContent.featuredLabel)}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                    {t(homeHeroContent.featuredTitle)}
                  </h2>

                  <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                    {t(homeHeroContent.featuredDescription)}
                  </p>
                </div>

                <Badge variant="primary" className="shrink-0">
                  {t(homeHeroContent.verifiedLabel)}
                </Badge>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden bg-background">
                <Image
                  src="/images/solutions/certidocs-ct-vehicle-registration.png"
                  alt={t(homeHeroContent.visualSoftwareAlt)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  preload
                  className="object-contain p-3"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_0.86fr] lg:-mt-8 lg:mx-6">
              <div className="rounded-lg border border-border bg-background p-3 shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-surface-muted">
                  <Image
                    src="/images/documents/secure-inspection-report-face-a.png"
                    alt={t(homeHeroContent.visualDocumentAlt)}
                    fill
                    sizes="(max-width: 768px) 100vw, 28vw"
                    className="object-contain p-2"
                  />
                </div>

                <p className="mt-3 text-sm font-semibold text-foreground">
                  {t(homeHeroContent.documentPreviewLabel)}
                </p>
              </div>

              <div className="rounded-lg border border-border bg-background p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-surface-muted">
                    <Image
                      src="/images/documents/bubble-seal-qr-code.png"
                      alt={t(homeHeroContent.visualSealAlt)}
                      fill
                      sizes="80px"
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">
                      {t(homeHeroContent.sealPreviewLabel)}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted">
                      {t(homeHeroContent.verificationTitle)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-md bg-primary/10 p-3">
                  <p className="text-sm leading-6 text-primary">
                    {t(homeHeroContent.verificationDescription)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
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
