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
    fr: "PROOFTAG CATIS accorde une attention particulière aux informations transmises via son site. Cette page présente les principes appliqués et les points à compléter avant validation juridique finale.",
    en: "PROOFTAG CATIS pays careful attention to information submitted through its website. This page presents the principles applied and the points to be completed before final legal validation.",
  },
} as const;

const privacySections = [
  {
    title: {
      fr: "Données collectées via le formulaire",
      en: "Data collected through the form",
    },
    paragraphs: [
      {
        fr: "Le formulaire de contact peut collecter les informations renseignées volontairement par l’utilisateur : nom, adresse email, sujet et message. D’autres champs peuvent être pris en compte uniquement s’ils sont affichés dans le formulaire.",
        en: "The contact form may collect information voluntarily provided by the user: name, email address, subject and message. Other fields may be processed only if they are displayed in the form.",
      },
      {
        fr: "Ces informations ne sont pas destinées à être publiées sur le site.",
        en: "This information is not intended to be published on the website.",
      },
    ],
  },
  {
    title: {
      fr: "Finalité du traitement",
      en: "Purpose of processing",
    },
    paragraphs: [
      {
        fr: "Les informations transmises via le formulaire sont utilisées uniquement pour comprendre la demande, répondre à l’utilisateur et assurer le suivi des échanges professionnels.",
        en: "Information submitted through the form is used only to understand the request, respond to the user and follow up on professional exchanges.",
      },
    ],
  },
  {
    title: {
      fr: "Base d’utilisation",
      en: "Basis for use",
    },
    paragraphs: [
      {
        fr: "L’utilisation des informations repose sur la demande volontaire transmise par l’utilisateur et sur la nécessité de répondre à cette demande.",
        en: "The use of information is based on the voluntary request submitted by the user and on the need to respond to that request.",
      },
      {
        fr: "La qualification juridique exacte de cette base doit être confirmée par PROOFTAG CATIS ou son conseil juridique.",
        en: "The exact legal qualification of this basis should be confirmed by PROOFTAG CATIS or its legal adviser.",
      },
    ],
  },
  {
    title: {
      fr: "Destinataires",
      en: "Recipients",
    },
    paragraphs: [
      {
        fr: "Les messages reçus sont destinés aux équipes habilitées de PROOFTAG CATIS chargées de traiter les demandes.",
        en: "Messages received are intended for authorized PROOFTAG CATIS teams responsible for handling requests.",
      },
      {
        fr: "Les informations ne sont pas destinées à être vendues, publiées ou communiquées à des tiers à des fins commerciales.",
        en: "The information is not intended to be sold, published or shared with third parties for commercial purposes.",
      },
    ],
  },
  {
    title: {
      fr: "Durée de conservation",
      en: "Retention period",
    },
    paragraphs: [
      {
        fr: "La durée de conservation des messages et informations de contact est à préciser par PROOFTAG CATIS selon ses procédures internes et ses obligations applicables.",
        en: "The retention period for messages and contact information must be defined by PROOFTAG CATIS according to its internal procedures and applicable obligations.",
      },
      {
        fr: "À compléter avec une durée validée avant publication définitive.",
        en: "To be completed with a validated retention period before final publication.",
      },
    ],
  },
  {
    title: {
      fr: "Droits des utilisateurs",
      en: "User rights",
    },
    paragraphs: [
      {
        fr: "Toute personne ayant transmis des informations via le site peut contacter PROOFTAG CATIS pour demander des précisions, une mise à jour ou la suppression des informations la concernant, sous réserve des obligations applicables.",
        en: "Anyone who has submitted information through the website may contact PROOFTAG CATIS to request clarification, updates or deletion of information concerning them, subject to applicable obligations.",
      },
      {
        fr: "Les modalités exactes d’exercice des droits doivent être complétées et validées juridiquement.",
        en: "The exact procedures for exercising these rights should be completed and legally validated.",
      },
    ],
  },
  {
    title: {
      fr: "Cookies",
      en: "Cookies",
    },
    paragraphs: [
      {
        fr: "À ce stade, le site n’est pas présenté comme utilisant des cookies de suivi non essentiels. Si des outils de mesure d’audience, de publicité ou de suivi sont ajoutés ultérieurement, cette page devra être mise à jour.",
        en: "At this stage, the website is not presented as using non-essential tracking cookies. If analytics, advertising or tracking tools are added later, this page should be updated.",
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
        fr: `Pour toute question relative aux informations transmises, vous pouvez contacter PROOFTAG CATIS à l’adresse ${company.email}.`,
        en: `For any question related to submitted information, you can contact PROOFTAG CATIS at ${company.email}.`,
      },
    ],
    href: `mailto:${company.email}`,
  },
] as const;

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
          <div className="grid gap-6">
            {privacySections.map((section) => (
              <Card key={t(section.title)} padding="lg">
                <CardHeader>
                  <CardTitle>{t(section.title)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4 text-sm leading-7 text-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={t(paragraph)}>{t(paragraph)}</p>
                    ))}
                  </div>

                  {"href" in section ? (
                    <a
                      href={section.href}
                      className="mt-5 inline-flex text-sm font-semibold text-primary transition hover:text-primary-hover"
                    >
                      {company.email}
                    </a>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
