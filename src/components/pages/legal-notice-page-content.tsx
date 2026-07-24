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
    fr: "Cette page présente les informations légales disponibles relatives au site PROOFTAG CATIS. Les éléments officiels non encore renseignés sont clairement signalés.",
    en: "This page presents the available legal information related to the PROOFTAG CATIS website. Official details that have not yet been provided are clearly marked.",
  },
} as const;

const legalSections = [
  {
    title: {
      fr: "Éditeur du site",
      en: "Website publisher",
    },
    details: [
      {
        label: {
          fr: "Nom",
          en: "Name",
        },
        value: company.name,
      },
      {
        label: {
          fr: "Adresse",
          en: "Address",
        },
        value: company.address,
      },
      {
        label: {
          fr: "Email",
          en: "Email",
        },
        value: company.email,
        href: `mailto:${company.email}`,
      },
      {
        label: {
          fr: "Téléphone",
          en: "Phone",
        },
        value: company.phone,
        href: `tel:${company.phone.replaceAll(" ", "")}`,
      },
    ],
    paragraphs: [
      {
        fr: "Les informations complémentaires d’identification de l’entreprise, telles que les références d’immatriculation ou d’identification fiscale, sont à compléter avec les informations légales officielles de PROOFTAG CATIS.",
        en: "Additional company identification details, such as registration or tax identification references, must be completed with the official legal information of PROOFTAG CATIS.",
      },
    ],
  },
  {
    title: {
      fr: "Responsable de publication",
      en: "Publication manager",
    },
    paragraphs: [
      {
        fr: "Responsable de publication : information à compléter par PROOFTAG CATIS.",
        en: "Publication manager: information to be completed by PROOFTAG CATIS.",
      },
      {
        fr: "Cette mention doit être validée avec le représentant légal ou la personne officiellement désignée pour la publication du site.",
        en: "This notice should be validated with the legal representative or the person officially appointed for website publication.",
      },
    ],
  },
  {
    title: {
      fr: "Hébergement",
      en: "Hosting",
    },
    paragraphs: [
      {
        fr: "Hébergeur du site : information à compléter avec le nom, l’adresse et les coordonnées de l’hébergeur retenu pour la mise en production.",
        en: "Website host: information to be completed with the name, address and contact details of the hosting provider selected for production.",
      },
    ],
  },
  {
    title: {
      fr: "Propriété intellectuelle",
      en: "Intellectual property",
    },
    paragraphs: [
      {
        fr: "Les contenus, textes, éléments graphiques, logos, visuels et structures de pages présentés sur ce site sont destinés à la communication de PROOFTAG CATIS.",
        en: "The content, text, graphic elements, logos, visuals and page structures presented on this website are intended for PROOFTAG CATIS communications.",
      },
      {
        fr: "Toute reproduction, adaptation ou diffusion non autorisée doit faire l’objet d’une demande préalable auprès de PROOFTAG CATIS.",
        en: "Any unauthorized reproduction, adaptation or distribution should be subject to prior request to PROOFTAG CATIS.",
      },
    ],
  },
  {
    title: {
      fr: "Responsabilité",
      en: "Liability",
    },
    paragraphs: [
      {
        fr: "PROOFTAG CATIS veille à publier des informations claires et à jour. Certaines informations peuvent toutefois évoluer et devront être confirmées avant tout usage contractuel, administratif ou juridique.",
        en: "PROOFTAG CATIS aims to publish clear and up-to-date information. Some information may nevertheless change and should be confirmed before any contractual, administrative or legal use.",
      },
      {
        fr: "Le site peut contenir des liens vers des sites tiers. PROOFTAG CATIS ne peut être tenue responsable du contenu ou du fonctionnement de ces sites externes.",
        en: "The website may contain links to third-party websites. PROOFTAG CATIS cannot be held responsible for the content or operation of these external websites.",
      },
    ],
  },
  {
    title: {
      fr: "Contact",
      en: "Contact",
    },
    paragraphs: [
      {
        fr: "Pour toute demande relative au site, à son contenu ou aux informations publiées, vous pouvez contacter PROOFTAG CATIS via les coordonnées indiquées ci-dessus.",
        en: "For any request related to the website, its content or published information, you can contact PROOFTAG CATIS using the contact details listed above.",
      },
    ],
  },
] as const;

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
          <div className="grid gap-6">
            {legalSections.map((section) => (
              <Card key={t(section.title)} padding="lg">
                <CardHeader>
                  <CardTitle>{t(section.title)}</CardTitle>
                </CardHeader>

                <CardContent>
                  {"details" in section ? (
                    <dl className="mb-6 grid gap-4 text-sm leading-7 text-muted sm:grid-cols-2">
                      {section.details.map((detail) => (
                        <div key={t(detail.label)}>
                          <dt className="font-semibold text-foreground">
                            {t(detail.label)}
                          </dt>
                          <dd className="mt-1">
                            {"href" in detail ? (
                              <a
                                href={detail.href}
                                className="transition hover:text-primary"
                              >
                                {detail.value}
                              </a>
                            ) : (
                              detail.value
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  <div className="space-y-4 text-sm leading-7 text-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={t(paragraph)}>{t(paragraph)}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
