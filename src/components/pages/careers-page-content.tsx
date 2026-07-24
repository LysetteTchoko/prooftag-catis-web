"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  type LocalizedString,
} from "@/lib/i18n";

const pageContent = {
  eyebrow: {
    fr: "Carrière",
    en: "Careers",
  },
  title: {
    fr: "Rejoindre PROOFTAG CATIS",
    en: "Join PROOFTAG CATIS",
  },
  description: {
    fr: "PROOFTAG CATIS s’intéresse aux profils capables de contribuer à des solutions numériques fiables, utiles et adaptées aux environnements sensibles.",
    en: "PROOFTAG CATIS is interested in profiles who can contribute to reliable, useful digital solutions for sensitive environments.",
  },
  cardTitle: {
    fr: "Candidatures et collaborations",
    en: "Applications and collaborations",
  },
  cardDescription: {
    fr: "Les opportunités peuvent concerner le développement logiciel, la sécurité documentaire, la donnée, le support technique ou l’accompagnement opérationnel. Les profils intéressés peuvent utiliser l’adresse email officielle.",
    en: "Opportunities may involve software development, document security, data, technical support or operational guidance. Interested candidates can use the official email address.",
  },
} as const;

export function CareersPageContent() {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow={t(pageContent.eyebrow)}
        title={t(pageContent.title)}
        description={t(pageContent.description)}
      />

      <Section spacing="md">
        <Container size="md">
          <Card padding="lg">
            <CardHeader>
              <CardTitle>{t(pageContent.cardTitle)}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm leading-7 text-muted">
                {t(pageContent.cardDescription)}
              </p>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
