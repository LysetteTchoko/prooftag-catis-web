"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
  QrCode,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  certidocsFocusContent,
  certidocsHighlights,
  certidocsSteps,
} from "@/data/home-certidocs-focus";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

const certidocsIcons = {
  document: FileCheck2,
  verify: QrCode,
  trace: BadgeCheck,
  trust: ShieldCheck,
};

const certidocsPreviewAlt = {
  fr: "Aperçu de l’écran d’enregistrement d’un véhicule dans Certidocs CT",
  en: "Preview of the vehicle registration screen in Certidocs CT",
} as const;

export function HomeCertidocsFocus() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section spacing="md" className="bg-surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow={t(certidocsFocusContent.eyebrow)}
              title={t(certidocsFocusContent.title)}
              description={t(certidocsFocusContent.description)}
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {certidocsHighlights.map((item) => {
                const Icon = certidocsIcons[item.icon];

                return (
                  <Card key={item.icon} className="h-full p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-base font-bold text-foreground">
                      {t(item.title)}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {t(item.description)}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="relative overflow-hidden border-primary/20 bg-primary p-6 text-primary-foreground shadow-soft md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(20,165,245,0.3),transparent_35%)]" />

            <div className="relative">
              <Badge
                variant="outline"
                className="border-white/30 bg-white/10 text-white"
              >
                {t(certidocsFocusContent.centralLabel)}
              </Badge>

              <h3 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
                {t(certidocsFocusContent.cardTitle)}
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/80">
                {t(certidocsFocusContent.cardDescription)}
              </p>

              <div className="mt-8 overflow-hidden rounded-lg border border-white/15 bg-white shadow-soft">
                <Image
                  src="/images/solutions/certidocs-ct-vehicle-registration.png"
                  alt={t(certidocsPreviewAlt)}
                  width={1279}
                  height={693}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="h-auto w-full"
                />
              </div>

              <div className="mt-8 space-y-4">
                {certidocsSteps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur"
                  >
                    <div className="flex gap-4">
                      <span className="text-sm font-bold text-accent-light">
                        {step.number}
                      </span>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          {t(step.title)}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-white/75">
                          {t(step.description)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link
                    href={localizePathname(
                      "/solutions/certidocs-ct",
                      locale
                    )}
                  >
                    {t(certidocsFocusContent.cta)}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
