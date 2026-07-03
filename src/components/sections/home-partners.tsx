"use client";

import {
  Building2,
  CarFront,
  Handshake,
  Network,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  homePartnersContent,
  homePartnersItems,
} from "@/data/home-partners";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  type LocalizedString,
} from "@/lib/i18n";

const partnerIcons = {
  administration: Building2,
  control: CarFront,
  organization: Handshake,
  technology: Network,
};

export function HomePartners() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section spacing="md" className="bg-surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={t(homePartnersContent.eyebrow)}
              title={t(homePartnersContent.title)}
              description={t(homePartnersContent.description)}
            />

            <div className="mt-8 rounded-xl border border-border bg-background p-6">
              <Badge variant="primary">
                {t(homePartnersContent.collaborationLabel)}
              </Badge>

              <p className="mt-4 text-sm leading-7 text-muted">
                {t(homePartnersContent.collaborationDescription)}
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {homePartnersItems.map((partner) => {
              const Icon = partnerIcons[partner.icon];

              return (
                <Card key={partner.icon} className="h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-foreground">
                    {t(partner.title)}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {t(partner.description)}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}