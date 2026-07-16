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
import { company } from "@/constants/company";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  type LocalizedString,
} from "@/lib/i18n";

const pageContent = {
  eyebrow: {
    fr: "Confidentialité",
    en: "Privacy",
  },
  title: {
    fr: "Politique de confidentialité",
    en: "Privacy policy",
  },
  description: {
    fr: "PROOFTAG CATIS accorde une attention particulière à la confidentialité des informations transmises via son site internet.",
    en: "PROOFTAG CATIS pays careful attention to the confidentiality of information submitted through its website.",
  },
  cardTitle: {
    fr: "Protection des informations",
    en: "Information protection",
  },
  intro: {
    fr: `${company.name} utilise les informations reçues via ses canaux de contact pour répondre aux demandes professionnelles et assurer le suivi des échanges.`,
    en: `${company.name} uses information received through its contact channels to respond to professional requests and follow up on exchanges.`,
  },
  contactForm: {
    fr: "Les informations communiquées ne sont pas destinées à être publiées sur le site. Elles servent uniquement à comprendre le contexte de la demande et à faciliter la réponse de l’équipe.",
    en: "Submitted information is not intended to be published on the website. It is used only to understand the request context and help the team respond.",
  },
  rights: {
    fr: `Pour toute question relative aux informations transmises, vous pouvez contacter PROOFTAG CATIS à l’adresse ${company.email}.`,
    en: `For any question related to submitted information, you can contact PROOFTAG CATIS at ${company.email}.`,
  },
} as const;

export function PrivacyPageContent() {
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
              <div className="space-y-5 text-sm leading-7 text-muted">
                <p>{t(pageContent.intro)}</p>
                <p>{t(pageContent.contactForm)}</p>
                <p>{t(pageContent.rights)}</p>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
