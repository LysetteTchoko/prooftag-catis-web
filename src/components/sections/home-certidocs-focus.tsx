"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  certidocsFocusContent,
  certidocsProofPoints,
} from "@/data/home-certidocs-focus";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

const certidocsPreviewAlt = {
  fr: "Aperçu de l’écran d’enregistrement d’un véhicule dans Certidocs CT",
  en: "Preview of the vehicle registration screen in Certidocs CT",
} as const;

const certidocsTrustLabel = {
  fr: "QR + scellé",
  en: "QR + seal",
} as const;

export function HomeCertidocsFocus() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section spacing="md" className="bg-surface">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow={t(certidocsFocusContent.eyebrow)}
              title={t(certidocsFocusContent.title)}
              description={t(certidocsFocusContent.description)}
            />

            <div className="mt-8 space-y-4">
              {certidocsProofPoints.map((point) => (
                <div key={t(point.title)} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />

                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {t(point.title)}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-muted">
                      {t(point.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild variant="outline" size="lg">
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

          <Card className="overflow-hidden border-primary/15 bg-[linear-gradient(135deg,#ffffff_0%,#f5fbff_54%,#eef8ff_100%)] p-4 shadow-soft">
            <div className="flex items-start justify-between gap-4 border-b border-primary/10 px-2 pb-4">
              <div>
                <Badge variant="primary">
                  {t(certidocsFocusContent.centralLabel)}
                </Badge>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {t(certidocsFocusContent.cardTitle)}
                </h3>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-border bg-white shadow-card">
              <div className="flex items-center justify-between gap-3 border-b border-border bg-surface-muted px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>

                <span className="truncate text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Certidocs CT
                </span>
              </div>

              <div className="bg-white p-3">
                <Image
                  src="/images/solutions/certidocs-ct-vehicle-registration.png"
                  alt={t(certidocsPreviewAlt)}
                  width={1279}
                  height={693}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="h-auto w-full rounded-lg border border-border/70"
                />
              </div>
            </div>

            <div className="grid gap-3 px-2 pt-4 sm:grid-cols-[1fr_0.78fr]">
              <p className="text-sm leading-7 text-muted">
                {t(certidocsFocusContent.cardDescription)}
              </p>

              <div className="rounded-lg border border-primary/10 bg-white/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {t(certidocsTrustLabel)}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {t(certidocsFocusContent.cardTitle)}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
