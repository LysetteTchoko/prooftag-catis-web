"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileCheck2,
  QrCode,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  homeHeroContent,
  homeHeroProofs,
} from "@/data/home-hero";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

const proofIcons = [ShieldCheck, FileCheck2, QrCode] as const;

export function HomeHero() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section
      spacing="lg"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#eef6ff_46%,#ffffff_100%)]"
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <Badge variant="accent">{t(homeHeroContent.eyebrow)}</Badge>

            <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-6xl">
              {t(homeHeroContent.title)}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {t(homeHeroContent.description)}
            </p>

            <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-primary">
              {t(homeHeroContent.solutionLine)}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href={localizePathname("/solutions", locale)}>
                  {t(homeHeroContent.primaryCta)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {homeHeroProofs.map((item, index) => {
                const Icon = proofIcons[index];

                return (
                  <div
                    key={t(item.title)}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-muted shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    {t(item.title)}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="relative overflow-hidden rounded-xl border border-primary/15 bg-background shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#eef8ff_0%,#ffffff_48%,#e7f5ff_100%)]" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

              <div className="relative flex flex-col gap-4 border-b border-primary/10 bg-white/70 p-5 backdrop-blur sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-accent">
                    {t(homeHeroContent.featuredLabel)}
                  </p>

                  <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
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

              <div className="relative p-4 sm:p-6">
                <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-xl border border-border bg-white p-5 shadow-card">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                      </div>

                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">
                        Certidocs CT
                      </span>
                    </div>

                    <div className="mt-5 rounded-lg border border-border bg-surface p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <FileCheck2 className="h-6 w-6" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-foreground">
                            {t(homeHeroContent.documentPreviewLabel)}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-muted">
                            {t(homeHeroContent.verificationDescription)}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3">
                        <span className="h-2.5 rounded-full bg-primary/15" />
                        <span className="h-2.5 w-5/6 rounded-full bg-slate-200" />
                        <span className="h-2.5 w-2/3 rounded-full bg-slate-200" />
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {homeHeroProofs.map((item, index) => {
                        const Icon = proofIcons[index];

                        return (
                          <div
                            key={t(item.title)}
                            className="rounded-lg border border-border bg-background p-3"
                          >
                            <Icon className="h-5 w-5 text-accent" />
                            <span className="mt-3 block text-xs font-semibold leading-5 text-foreground">
                              {t(item.title)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-xl border border-primary/15 bg-primary p-5 text-primary-foreground shadow-card">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                            {t(homeHeroContent.sealPreviewLabel)}
                          </p>
                          <h3 className="mt-3 text-2xl font-bold tracking-tight">
                            {t(homeHeroContent.verificationTitle)}
                          </h3>
                        </div>

                        <QrCode className="h-12 w-12 shrink-0 text-white" />
                      </div>

                      <div className="mt-6 rounded-lg border border-white/15 bg-white/10 p-3">
                        <div className="grid grid-cols-[4.5rem_1fr] gap-3">
                          <div className="relative h-16 overflow-hidden rounded-md bg-white">
                            <Image
                              src="/images/documents/bubble-seal-qr-code.png"
                              alt={t(homeHeroContent.visualSealAlt)}
                              fill
                              sizes="72px"
                              className="object-contain p-2"
                            />
                          </div>

                          <div className="space-y-2 pt-1">
                            <span className="block h-2 rounded-full bg-white/55" />
                            <span className="block h-2 w-4/5 rounded-full bg-white/35" />
                            <span className="block h-2 w-2/3 rounded-full bg-white/25" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-border bg-white p-5 shadow-card">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <ShieldCheck className="h-6 w-6" />
                        </div>

                        <Badge variant="accent">
                          {t(homeHeroContent.verifiedLabel)}
                        </Badge>
                      </div>

                      <p className="mt-4 text-sm font-semibold text-foreground">
                        {t(homeHeroContent.featuredDescription)}
                      </p>

                      <div className="mt-5 grid gap-2">
                        <span className="h-2 rounded-full bg-primary/15" />
                        <span className="h-2 w-4/5 rounded-full bg-accent/20" />
                        <span className="h-2 w-2/3 rounded-full bg-slate-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
