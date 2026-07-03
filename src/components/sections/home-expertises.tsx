"use client";

import {
  BarChart3,
  CarFront,
  ClipboardCheck,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  homeExpertisesContent,
  homeExpertisesItems,
} from "@/data/home-expertises";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  type LocalizedString,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

const expertiseIcons = {
  security: ShieldCheck,
  road: CarFront,
  verification: ScanSearch,
  data: BarChart3,
  support: ClipboardCheck,
};

export function HomeExpertises() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section spacing="md" className="bg-surface">
      <Container>
        <SectionHeader
          eyebrow={t(homeExpertisesContent.eyebrow)}
          title={t(homeExpertisesContent.title)}
          description={t(homeExpertisesContent.description)}
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeExpertisesItems.map((expertise) => {
            const Icon = expertiseIcons[expertise.icon];

            return (
              <Card
                key={expertise.icon}
                className={cn(
                  "h-full",
                  expertise.featured &&
                    "border-primary/20 bg-gradient-to-br from-surface to-primary/5 lg:col-span-2"
                )}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>

                    {expertise.featured ? (
                      <Badge variant="primary">
                        {t(homeExpertisesContent.featuredBadge)}
                      </Badge>
                    ) : null}
                  </div>

                  <CardTitle className="mt-6">
                    {t(expertise.title)}
                  </CardTitle>

                  <CardDescription>
                    {t(expertise.description)}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 text-sm text-muted">
                    {expertise.points.map((point) => (
                      <li key={t(point)} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {t(point)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}