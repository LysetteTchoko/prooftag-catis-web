"use client";

import { BarChart3, Building2, CarFront, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  homeChallengesContent,
  homeChallengesItems,
} from "@/data/home-challenges";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  type LocalizedString,
} from "@/lib/i18n";

const challengeIcons = {
  administration: Building2,
  control: CarFront,
  organization: ShieldCheck,
  data: BarChart3,
};

export function HomeChallenges() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <Section spacing="md" className="bg-surface">
      <Container>
        <SectionHeader
          eyebrow={t(homeChallengesContent.eyebrow)}
          title={t(homeChallengesContent.title)}
          description={t(homeChallengesContent.description)}
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homeChallengesItems.map((challenge) => {
            const Icon = challengeIcons[challenge.icon];

            return (
              <Card key={challenge.icon} className="h-full">
                <CardHeader>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <CardTitle className="text-lg">
                    {t(challenge.title)}
                  </CardTitle>

                  <CardDescription>
                    {t(challenge.description)}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-6 text-muted">
                    {t(homeChallengesContent.cardFooterText)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}