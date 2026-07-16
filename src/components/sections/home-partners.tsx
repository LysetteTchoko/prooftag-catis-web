"use client";

import Image from "next/image";
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
  homeEcosystemActors,
  homePartnersContent,
  homePartnersItems,
  homePartnerVisuals,
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

              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">
                  {t(homePartnersContent.actorsLabel)}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {homeEcosystemActors.map((actor) => (
                    <Badge key={t(actor)} variant="outline">
                      {t(actor)}
                    </Badge>
                  ))}
                </div>
              </div>
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

        <div className="mt-14">
          <SectionHeader
            eyebrow={t(homePartnersContent.visualEyebrow)}
            title={t(homePartnersContent.visualTitle)}
            description={t(homePartnersContent.visualDescription)}
            align="center"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {homePartnerVisuals.map((visual) => (
              <Card
                key={visual.src}
                padding="none"
                className="h-full overflow-hidden"
              >
                <div className="flex h-40 items-center justify-center border-b border-border bg-background p-6">
                  <Image
                    src={visual.src}
                    alt={t(visual.alt)}
                    width={visual.width}
                    height={visual.height}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {t(visual.title)}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {t(visual.description)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
