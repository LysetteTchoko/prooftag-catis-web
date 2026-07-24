"use client";

import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CarFront,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  QrCode,
  ScanSearch,
  Search,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  type LocalizedString,
} from "@/lib/i18n";

type VerificationItem = {
  title: LocalizedString;
  description: LocalizedString;
};

type VerificationVisual = {
  eyebrow: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  inputLabel: LocalizedString;
  inputValue: LocalizedString;
  qrLabel: LocalizedString;
  statusLabel: LocalizedString;
  statusValue: LocalizedString;
  resultItems: readonly VerificationItem[];
};

type CtVerifVerificationPanelProps = {
  content: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    description: LocalizedString;
  };
  checks: readonly VerificationItem[];
  visual: VerificationVisual;
  externalLink?: {
    href: string;
    label: LocalizedString;
  } | null;
};

const flowLabels = {
  plateOrQr: {
    fr: "Plaque ou QR Code",
    en: "Plate or QR Code",
  },
  verification: {
    fr: "Vérification",
    en: "Verification",
  },
  controlledResult: {
    fr: "Résultat contrôlable",
    en: "Controllable result",
  },
} as const;

export function CtVerifVerificationPanel({
  content,
  checks,
  visual,
  externalLink,
}: CtVerifVerificationPanelProps) {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section spacing="md">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={t(content.eyebrow)}
              title={t(content.title)}
              description={t(content.description)}
            />

            <div className="mt-8 grid gap-4">
              {checks.map((item) => (
                <div
                  key={t(item.title)}
                  className="flex gap-4 rounded-lg border border-border bg-surface p-5 shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>

                  <div>
                    <h3 className="text-base font-bold tracking-tight text-foreground">
                      {t(item.title)}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      {t(item.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card
            padding="lg"
            className="overflow-hidden border-primary/15 bg-[linear-gradient(135deg,#ffffff_0%,#f5fbff_54%,#e8f7ff_100%)] shadow-soft"
          >
            <div className="flex flex-col gap-6">
              <div>
                <Badge variant="primary">{t(visual.eyebrow)}</Badge>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
                  {t(visual.title)}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {t(visual.description)}
                </p>
              </div>

              <div className="grid gap-3 rounded-xl border border-primary/10 bg-white/80 p-3 shadow-sm sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                <VerificationStep
                  icon={<CarFront className="h-5 w-5" />}
                  label={t(flowLabels.plateOrQr)}
                />
                <ArrowRight className="hidden h-5 w-5 text-primary/55 sm:block" />
                <VerificationStep
                  icon={<ScanSearch className="h-5 w-5" />}
                  label={t(flowLabels.verification)}
                />
                <ArrowRight className="hidden h-5 w-5 text-primary/55 sm:block" />
                <VerificationStep
                  icon={<BadgeCheck className="h-5 w-5" />}
                  label={t(flowLabels.controlledResult)}
                />
              </div>

              <div className="overflow-hidden rounded-xl border border-border bg-background shadow-card">
                <div className="flex items-center justify-between gap-3 border-b border-border bg-surface-muted px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  </div>

                    <span className="truncate text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      mintctv.cm
                    </span>
                  </div>

                <div className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fcff_100%)] p-5">
                  <div className="grid gap-4 sm:grid-cols-[1fr_7rem]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        {t(visual.inputLabel)}
                      </p>

                      <div className="mt-3 flex min-h-12 items-center gap-3 rounded-lg border border-border bg-surface px-4">
                        <Search className="h-5 w-5 shrink-0 text-primary" />
                        <span className="font-mono text-sm font-semibold text-foreground">
                          {t(visual.inputValue)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-surface p-3 text-center">
                      <QrCode className="h-10 w-10 text-primary" />
                        <span className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                          {t(visual.qrLabel)}
                        </span>
                      </div>
                    </div>

                  <div className="mt-5 rounded-lg border border-accent/25 bg-accent/10 p-4 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-muted">
                        {t(visual.statusLabel)}
                      </span>

                      <Badge variant="accent">{t(visual.statusValue)}</Badge>
                    </div>

                    <div className="mt-4 grid gap-3">
                      {visual.resultItems.map((item) => (
                        <div
                          key={t(item.title)}
                          className="flex gap-3 rounded-md bg-background/80 p-3"
                        >
                          <FileSearch className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {t(item.title)}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-muted">
                              {t(item.description)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-background p-4">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {t(visual.statusValue)}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted">
                    {t(visual.statusLabel)}
                  </p>
                </div>

                {externalLink ? (
                  <div className="rounded-lg border border-border bg-background p-4">
                    <p className="text-sm font-semibold text-foreground">
                      mintctv.cm
                    </p>
                    <p className="mt-2 text-xs leading-5 text-muted">
                      {t(externalLink.label)}
                    </p>

                    <Button asChild variant="outline" size="sm" className="mt-4">
                      <a
                        href={externalLink.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t(externalLink.label)}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

function VerificationStep({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="text-sm font-semibold leading-5 text-foreground">
        {label}
      </span>
    </div>
  );
}
