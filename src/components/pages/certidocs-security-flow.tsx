"use client";

import {
  Camera,
  CheckCircle2,
  Database,
  FileCheck2,
  Gauge,
  MapPin,
  Printer,
  QrCode,
  RefreshCw,
  ScanSearch,
  ShieldCheck,
  TabletSmartphone,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  type LocalizedString,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

type SecurityPoint = {
  title: LocalizedString;
  description: LocalizedString;
};

type CertidocsSecurityFlowProps = {
  points: readonly SecurityPoint[];
  eyebrow: string;
  title: string;
  description: string;
};

const flowIcons = [
  ScanSearch,
  RefreshCw,
  Gauge,
  Camera,
  MapPin,
  TabletSmartphone,
  FileCheck2,
  CheckCircle2,
  Printer,
  QrCode,
  Database,
  ShieldCheck,
] satisfies LucideIcon[];

const phaseContent = [
  {
    start: 0,
    end: 2,
    label: {
      fr: "Identification",
      en: "Identification",
    },
    description: {
      fr: "Vérifier, synchroniser et collecter les données techniques.",
      en: "Verify, synchronize and collect technical data.",
    },
  },
  {
    start: 3,
    end: 5,
    label: {
      fr: "Constat terrain",
      en: "Field evidence",
    },
    description: {
      fr: "Documenter le véhicule, le lieu et le contrôle visuel.",
      en: "Document the vehicle, location and visual check.",
    },
  },
  {
    start: 6,
    end: 9,
    label: {
      fr: "Preuve sécurisée",
      en: "Secured proof",
    },
    description: {
      fr: "Produire la décision, le PV, la vignette et les marqueurs de vérification.",
      en: "Produce the decision, report, sticker and verification markers.",
    },
  },
  {
    start: 10,
    end: 11,
    label: {
      fr: "Supervision",
      en: "Supervision",
    },
    description: {
      fr: "Centraliser les données et permettre la vérification terrain.",
      en: "Centralize data and enable field verification.",
    },
  },
] as const;

export function CertidocsSecurityFlow({
  points,
  eyebrow,
  title,
  description,
}: CertidocsSecurityFlowProps) {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section spacing="md">
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        <Card className="mt-12 overflow-hidden border-primary/15 bg-gradient-to-br from-surface via-background to-primary/5 p-4 shadow-soft md:p-6 lg:p-8">
          <div className="grid gap-4 lg:grid-cols-4">
            {phaseContent.map((phase, phaseIndex) => (
              <div
                key={phase.label.en}
                className="rounded-lg border border-border bg-background/80 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Badge variant={phaseIndex === 0 ? "primary" : "outline"}>
                      {String(phaseIndex + 1).padStart(2, "0")}
                    </Badge>

                    <h3 className="mt-4 text-base font-bold text-foreground">
                      {t(phase.label)}
                    </h3>
                  </div>

                  <span className="text-xs font-semibold text-muted">
                    {String(phase.start + 1).padStart(2, "0")}-
                    {String(phase.end + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {t(phase.description)}
                </p>
              </div>
            ))}
          </div>

          <ol className="relative mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <span
              aria-hidden="true"
              className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-primary/30 via-accent/40 to-primary/20 md:block xl:left-0 xl:top-9 xl:h-px xl:w-full"
            />

            {points.map((point, index) => {
              const Icon = flowIcons[index] ?? CheckCircle2;
              const isMilestone = index === 0 || index === 6 || index === 10;

              return (
                <li key={t(point.title)} className="relative">
                  <div
                    className={cn(
                      "group flex h-full gap-4 rounded-lg border bg-surface p-4 shadow-card transition md:flex-col",
                      isMilestone
                        ? "border-primary/25"
                        : "border-border hover:border-primary/20"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
                          isMilestone
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary"
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold leading-6 text-foreground">
                        {t(point.title)}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-muted">
                        {t(point.description)}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </Card>
      </Container>
    </Section>
  );
}
