"use client";

import {
  BarChart3,
  Building2,
  CarFront,
  FileCheck2,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import {
  homeSectorsContent,
  homeSectorsItems,
} from "@/data/home-sectors";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  type LocalizedString,
} from "@/lib/i18n";

const sectorIcons = {
  administration: Building2,
  mobility: CarFront,
  regulated: FileCheck2,
  data: BarChart3,
};

export function HomeSectors() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section spacing="md">
      <Container>
        <SectionHeader
          eyebrow={t(homeSectorsContent.eyebrow)}
          title={t(homeSectorsContent.title)}
          description={t(homeSectorsContent.description)}
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homeSectorsItems.map((sector) => {
            const Icon = sectorIcons[sector.icon];

            return (
              <Card
                key={sector.icon}
                className="group h-full p-6 hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-foreground">
                  {t(sector.title)}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {t(sector.description)}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}