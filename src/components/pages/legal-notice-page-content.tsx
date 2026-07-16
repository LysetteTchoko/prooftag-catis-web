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
    fr: "Informations légales",
    en: "Legal information",
  },
  title: {
    fr: "Mentions légales",
    en: "Legal notice",
  },
  description: {
    fr: "Retrouvez les informations d’identification et de contact relatives au site PROOFTAG CATIS.",
    en: "Find identification and contact information related to the PROOFTAG CATIS website.",
  },
  publisher: {
    fr: "Éditeur du site",
    en: "Website publisher",
  },
  name: {
    fr: "Nom :",
    en: "Name:",
  },
  address: {
    fr: "Adresse :",
    en: "Address:",
  },
  email: {
    fr: "Email :",
    en: "Email:",
  },
  phone: {
    fr: "Téléphone :",
    en: "Phone:",
  },
  notice: {
    fr: "Pour toute demande relative au site, à son contenu ou aux informations publiées, vous pouvez contacter l’équipe PROOFTAG CATIS via les coordonnées ci-dessus.",
    en: "For any request related to the website, its content or published information, you can contact the PROOFTAG CATIS team using the contact details above.",
  },
} as const;

export function LegalNoticePageContent() {
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
              <CardTitle>{t(pageContent.publisher)}</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  <strong className="text-foreground">
                    {t(pageContent.name)}
                  </strong>{" "}
                  {company.name}
                </p>

                <p>
                  <strong className="text-foreground">
                    {t(pageContent.address)}
                  </strong>{" "}
                  {company.address}
                </p>

                <p>
                  <strong className="text-foreground">
                    {t(pageContent.email)}
                  </strong>{" "}
                  {company.email}
                </p>

                <p>
                  <strong className="text-foreground">
                    {t(pageContent.phone)}
                  </strong>{" "}
                  {company.phone}
                </p>

                <p>{t(pageContent.notice)}</p>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
