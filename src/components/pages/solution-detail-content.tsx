"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CertidocsSecurityFlow } from "@/components/pages/certidocs-security-flow";
import { CtVerifVerificationPanel } from "@/components/pages/ct-verif-verification-panel";
import { DoserDashboardPanel } from "@/components/pages/doser-dashboard-panel";
import type { Solution } from "@/data/solutions";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

const pageContent = {
  back: {
    fr: "Retour aux solutions",
    en: "Back to solutions",
  },
  benefits: {
    fr: "Bénéfices principaux",
    en: "Key benefits",
  },
  useCases: {
    fr: "Cas d’usage",
    en: "Use cases",
  },
  features: {
    fr: "Fonctionnalités mises en avant",
    en: "Highlighted features",
  },
  certidocsOverviewTitle: {
    fr: "Ce que Certidocs CT sécurise",
    en: "What Certidocs CT secures",
  },
  certidocsScopeTitle: {
    fr: "Périmètre métier",
    en: "Business scope",
  },
  workflowEyebrow: {
    fr: "Fonctionnement métier",
    en: "Business workflow",
  },
  operationalServicesEyebrow: {
    fr: "Services opérationnels",
    en: "Operational services",
  },
  operationalServicesTitle: {
    fr: "Des services concrets pour déployer et exploiter Certidocs CT.",
    en: "Concrete services to deploy and operate Certidocs CT.",
  },
  operationalServicesDescription: {
    fr: "PROOFTAG CATIS accompagne les centres avec le logiciel, les équipements, les supports sécurisés et l’assistance nécessaires au bon fonctionnement du dispositif.",
    en: "PROOFTAG CATIS supports centers with the software, equipment, secured media and assistance needed for the system to operate properly.",
  },
  equipmentTitle: {
    fr: "Équipements possibles",
    en: "Possible equipment",
  },
  workflowTitle: {
    fr: "Un parcours de contrôle plus structuré, de la donnée à la preuve.",
    en: "A more structured inspection flow, from data to evidence.",
  },
  workflowDescription: {
    fr: "Certidocs CT reprend les étapes clés du contrôle technique pour mieux relier collecte, analyse, décision, sécurisation documentaire et vérification terrain.",
    en: "Certidocs CT covers key vehicle inspection steps to better connect collection, analysis, decision, document security and field verification.",
  },
  capabilityGroupsEyebrow: {
    fr: "Capacités plateforme",
    en: "Platform capabilities",
  },
  capabilityGroupsTitle: {
    fr: "Des fonctionnalités pensées pour les usages terrain et la décision.",
    en: "Features designed for field operations and decision-making.",
  },
  badgeGroupsEyebrow: {
    fr: "Modules & technologies",
    en: "Modules & technologies",
  },
  badgeGroupsTitle: {
    fr: "Une base fonctionnelle et technique structurée.",
    en: "A structured functional and technical foundation.",
  },
  securityChainEyebrow: {
    fr: "Chaîne de sécurisation",
    en: "Security chain",
  },
  securityChainTitle: {
    fr: "Les points clés sécurisés par le dispositif.",
    en: "Key points secured by the system.",
  },
  securityPointsEyebrow: {
    fr: "12 points de sécurisation",
    en: "12 security points",
  },
  securityPointsTitle: {
    fr: "Un parcours complet pour sécuriser chaque étape de la visite technique.",
    en: "A complete workflow to secure every step of the vehicle inspection.",
  },
  securityPointsDescription: {
    fr: "Ces points structurent la chaîne de confiance de Certidocs CT, depuis l’identification du véhicule jusqu’à la vérification terrain par les agents autorisés.",
    en: "These points structure the Certidocs CT trust chain, from vehicle identification to field verification by authorized agents.",
  },
  stakeholderValueEyebrow: {
    fr: "Valeur pour les acteurs",
    en: "Stakeholder value",
  },
  stakeholderValueTitle: {
    fr: "Une solution pensée pour l’ensemble de l’écosystème.",
    en: "A solution designed for the whole ecosystem.",
  },
  ecosystemActorsTitle: {
    fr: "Acteurs concernés",
    en: "Stakeholders involved",
  },
} as const;

const certidocsMediaContent = {
  eyebrow: {
    fr: "Preuves visuelles",
    en: "Visual evidence",
  },
  title: {
    fr: "Documents et preuves visuelles du dispositif.",
    en: "Documents and visual evidence from the system.",
  },
  description: {
    fr: "Les captures, supports sécurisés, QR Code, scellé à bulles et documents publics sont regroupés ici pour expliquer le parcours sans disperser l’attention.",
    en: "Screens, secured media, QR Code, bubble seal and public documents are grouped here to explain the workflow without scattering attention.",
  },
  items: [
    {
      title: {
        fr: "Accès Certidocs CT",
        en: "Certidocs CT access",
      },
      description: {
        fr: "Un aperçu de l’environnement logiciel utilisé dans le parcours de contrôle.",
        en: "A preview of the software environment used in the inspection workflow.",
      },
      src: "/images/solutions/certidocs-ct-login.png",
      alt: {
        fr: "Écran de connexion Certidocs CT",
        en: "Certidocs CT login screen",
      },
    },
    {
      title: {
        fr: "Enregistrement du véhicule",
        en: "Vehicle registration",
      },
      description: {
        fr: "La structuration des informations véhicule avant la génération des preuves.",
        en: "Structured vehicle information before evidence is generated.",
      },
      src: "/images/solutions/certidocs-ct-vehicle-registration.png",
      alt: {
        fr: "Écran d’enregistrement d’un véhicule dans Certidocs CT",
        en: "Vehicle registration screen in Certidocs CT",
      },
    },
    {
      title: {
        fr: "Procès-verbal et vignette",
        en: "Report and sticker",
      },
      description: {
        fr: "Un exemple de support sécurisé associé au résultat de la visite technique.",
        en: "An example of secured media associated with the inspection result.",
      },
      src: "/images/documents/secure-inspection-report-face-a.png",
      alt: {
        fr: "Exemple annoté de procès-verbal de contrôle technique sécurisé",
        en: "Annotated example of a secured vehicle inspection report",
      },
    },
    {
      title: {
        fr: "Photos et preuve terrain",
        en: "Photos and field evidence",
      },
      description: {
        fr: "La face complémentaire illustre l’association du véhicule, des photos et des informations de vignette.",
        en: "The complementary side shows how the vehicle, photos and sticker information are associated.",
      },
      src: "/images/documents/secure-inspection-report-face-b.png",
      alt: {
        fr: "Dos annoté du procès-verbal avec photos du véhicule et informations de vignette",
        en: "Annotated back of the report with vehicle photos and sticker information",
      },
    },
    {
      title: {
        fr: "Scellé à bulles et QR Code",
        en: "Bubble seal and QR Code",
      },
      description: {
        fr: "Une preuve physique unique combinée à un moyen de vérification numérique.",
        en: "Unique physical proof combined with a digital verification method.",
      },
      src: "/images/documents/bubble-seal-qr-code.png",
      alt: {
        fr: "Scellé à bulles avec QR Code utilisé pour sécuriser une vignette",
        en: "Bubble seal with QR Code used to secure a sticker",
      },
    },
  ],
} as const;

const certidocsReferenceProcessContent = {
  eyebrow: {
    fr: "Référence métier",
    en: "Business reference",
  },
  title: {
    fr: "Le processus sécurisé de délivrance de vignette.",
    en: "The secured sticker issuance process.",
  },
  description: {
    fr: "Ce repère métier montre la logique de délivrance, de sécurisation et de vérification de la vignette dans le contexte du contrôle technique.",
    en: "This business reference shows the logic behind issuing, securing and verifying the sticker in the vehicle inspection context.",
  },
  imageAlt: {
    fr: "Schéma du processus sécurisé de délivrance de vignette de contrôle technique",
    en: "Diagram of the secured vehicle inspection sticker issuance process",
  },
} as const;

const certidocsRegulatoryContextContent = {
  eyebrow: {
    fr: "Contexte réglementaire",
    en: "Regulatory context",
  },
  title: {
    fr: "Des documents publics qui situent l’évolution du contrôle technique.",
    en: "Public documents that place vehicle inspection changes in context.",
  },
  description: {
    fr: "Ces communiqués historiques du Ministère des Transports sont présentés comme repères de contexte. Ils illustrent la mise en avant de la vignette sécurisée, du procès-verbal et de la conformité des centres, sans remplacer une analyse juridique.",
    en: "These historical Ministry of Transport releases are presented as contextual references. They illustrate the focus on the secured sticker, inspection report and center compliance, without replacing legal analysis.",
  },
  items: [
    {
      title: {
        fr: "Nouvelle vignette sécurisée",
        en: "New secured sticker",
      },
      description: {
        fr: "Communiqué public relatif à l’entrée en vigueur d’une nouvelle vignette sécurisée et d’un nouveau modèle de procès-verbal.",
        en: "Public release concerning the introduction of a new secured sticker and a new inspection report model.",
      },
      src: "/images/documents/ministry-communique-secured-sticker-2020.jpg",
      alt: {
        fr: "Communiqué du Ministère des Transports sur la nouvelle vignette sécurisée de 2020",
        en: "Ministry of Transport release about the 2020 secured sticker",
      },
    },
    {
      title: {
        fr: "Conformité des centres",
        en: "Center compliance",
      },
      description: {
        fr: "Communiqué public rappelant le délai de mise en conformité des centres de contrôle technique automobile.",
        en: "Public release reminding vehicle inspection centers of the compliance deadline.",
      },
      src: "/images/documents/ministry-communique-compliance-deadline-2020.jpg",
      alt: {
        fr: "Communiqué du Ministère des Transports sur le délai de mise en conformité des centres",
        en: "Ministry of Transport release about the center compliance deadline",
      },
    },
  ],
} as const;

type SolutionDetailContentProps = {
  solution: Solution;
};

export function SolutionDetailContent({
  solution,
}: SolutionDetailContentProps) {
  const locale = useLocale();
  const workflow = "workflow" in solution ? solution.workflow : [];
  const operationalServices =
    "operationalServices" in solution ? solution.operationalServices : null;
  const securityPoints =
    "securityPoints" in solution ? solution.securityPoints : [];
  const securityChain = "securityChain" in solution ? solution.securityChain : [];
  const stakeholderValue =
    "stakeholderValue" in solution ? solution.stakeholderValue : [];
  const ecosystemActors =
    "ecosystemActors" in solution ? solution.ecosystemActors : [];
  const challenge = "challenge" in solution ? solution.challenge : null;
  const workflowContent =
    "workflowContent" in solution ? solution.workflowContent : null;
  const capabilityGroups =
    "capabilityGroups" in solution ? solution.capabilityGroups : [];
  const capabilityContent =
    "capabilityContent" in solution ? solution.capabilityContent : null;
  const badgeGroups = "badgeGroups" in solution ? solution.badgeGroups : null;
  const externalLink = "externalLink" in solution ? solution.externalLink : null;
  const isCertidocs = solution.slug === "certidocs-ct";
  const isCtVerif = solution.slug === "ct-verif";
  const isDoser = solution.slug === "doser";
  const verificationContent =
    "verificationContent" in solution ? solution.verificationContent : null;
  const verificationChecks =
    "verificationChecks" in solution ? solution.verificationChecks : [];
  const verificationVisual =
    "verificationVisual" in solution ? solution.verificationVisual : null;
  const productStatusContent =
    "productStatusContent" in solution ? solution.productStatusContent : null;
  const productStatusItems =
    "productStatusItems" in solution ? solution.productStatusItems : [];
  const dashboardContent =
    "dashboardContent" in solution ? solution.dashboardContent : null;
  const dashboardMetrics =
    "dashboardMetrics" in solution ? solution.dashboardMetrics : [];
  const dashboardRows =
    "dashboardRows" in solution ? solution.dashboardRows : [];

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow={t(solution.tag)}
        title={solution.name}
        description={t(solution.headline)}
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Button asChild variant="ghost" className="-ml-3">
                <Link href={localizePathname("/solutions", locale)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t(pageContent.back)}
                </Link>
              </Button>

              <div className="mt-8 rounded-xl border border-border bg-surface p-6 shadow-card md:p-8">
                <Badge variant={solution.featured ? "primary" : "outline"}>
                  {t(solution.tag)}
                </Badge>

                <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {t(solution.headline)}
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  {t(solution.description)}
                </p>

                {externalLink ? (
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="outline" size="lg">
                      <a
                        href={externalLink.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t(externalLink.label)}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid gap-6">
              {isCertidocs ? (
                <>
                  <Card padding="lg">
                    <CardHeader>
                      <CardTitle>{t(pageContent.certidocsOverviewTitle)}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <ul className="grid gap-3 sm:grid-cols-3">
                        {solution.points.map((point) => (
                          <li
                            key={t(point)}
                            className="rounded-lg border border-border bg-background p-4 text-sm font-medium text-foreground"
                          >
                            {t(point)}
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-6 space-y-4">
                        {solution.benefits.map((benefit) => (
                          <li
                            key={t(benefit)}
                            className="flex gap-3 text-sm leading-7 text-muted"
                          >
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                            <span>{t(benefit)}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card padding="lg" variant="muted">
                    <CardHeader>
                      <CardTitle>{t(pageContent.certidocsScopeTitle)}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        {solution.useCases.map((useCase) => (
                          <Badge key={t(useCase)} variant="outline">
                            {t(useCase)}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <>
                  <Card padding="lg">
                    <CardHeader>
                      <CardTitle>{t(pageContent.benefits)}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-4">
                        {solution.benefits.map((benefit) => (
                          <li
                            key={t(benefit)}
                            className="flex gap-3 text-sm leading-7 text-muted"
                          >
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                            <span>{t(benefit)}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card padding="lg" variant="muted">
                    <CardHeader>
                      <CardTitle>{t(pageContent.useCases)}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        {solution.useCases.map((useCase) => (
                          <Badge key={t(useCase)} variant="outline">
                            {t(useCase)}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card padding="lg">
                    <CardHeader>
                      <CardTitle>{t(pageContent.features)}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <ul className="grid gap-3 sm:grid-cols-3">
                        {solution.points.map((point) => (
                          <li
                            key={t(point)}
                            className="rounded-lg border border-border bg-background p-4 text-sm font-medium text-foreground"
                          >
                            {t(point)}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {challenge ? (
        <Section spacing="md" className="bg-surface">
          <Container>
            <SectionHeader
              eyebrow={t(challenge.eyebrow)}
              title={t(challenge.title)}
              description={t(challenge.description)}
              align="center"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {challenge.items.map((item) => (
                <Card key={t(item.title)} padding="lg" className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {t(item.title)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted">
                      {t(item.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {isCtVerif &&
      verificationContent &&
      verificationVisual &&
      verificationChecks.length > 0 ? (
        <CtVerifVerificationPanel
          content={verificationContent}
          checks={verificationChecks}
          visual={verificationVisual}
          externalLink={externalLink}
        />
      ) : null}

      {isDoser &&
      productStatusContent &&
      dashboardContent &&
      productStatusItems.length > 0 &&
      dashboardMetrics.length > 0 &&
      dashboardRows.length > 0 ? (
        <DoserDashboardPanel
          statusContent={productStatusContent}
          statusItems={productStatusItems}
          dashboardContent={dashboardContent}
          metrics={dashboardMetrics}
          rows={dashboardRows}
        />
      ) : null}

      {operationalServices && !isCertidocs ? (
        <Section spacing="md">
          <Container>
            <SectionHeader
              eyebrow={t(pageContent.operationalServicesEyebrow)}
              title={t(pageContent.operationalServicesTitle)}
              description={t(pageContent.operationalServicesDescription)}
              align="center"
            />

            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-muted">
              {t(operationalServices.intro)}
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {operationalServices.items.map((service) => (
                <Card key={t(service.title)} padding="lg" className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {t(service.title)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted">
                      {t(service.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card padding="lg" variant="muted" className="mt-6">
              <CardHeader>
                <CardTitle>{t(pageContent.equipmentTitle)}</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {operationalServices.equipment.map((equipment) => (
                    <Badge key={t(equipment)} variant="outline">
                      {t(equipment)}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Container>
        </Section>
      ) : null}

      {workflow.length > 0 ? (
        <Section spacing="md" className="bg-surface">
          <Container>
            <SectionHeader
              eyebrow={t(
                workflowContent?.eyebrow ?? pageContent.workflowEyebrow
              )}
              title={t(workflowContent?.title ?? pageContent.workflowTitle)}
              description={t(
                workflowContent?.description ?? pageContent.workflowDescription
              )}
              align="center"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {workflow.map((step, index) => (
                <Card key={t(step.title)} padding="lg" className="h-full">
                  <CardHeader>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <CardTitle className="mt-5 text-lg">
                      {t(step.title)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted">
                      {t(step.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {capabilityGroups.length > 0 ? (
        <Section spacing="md">
          <Container>
            <SectionHeader
              eyebrow={t(
                capabilityContent?.eyebrow ??
                  pageContent.capabilityGroupsEyebrow
              )}
              title={t(
                capabilityContent?.title ?? pageContent.capabilityGroupsTitle
              )}
              description={
                capabilityContent?.description
                  ? t(capabilityContent.description)
                  : undefined
              }
              align="center"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {capabilityGroups.map((group) => (
                <Card key={t(group.title)} padding="lg" className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {t(group.title)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted">
                      {t(group.description)}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {group.items.map((item) => (
                        <li
                          key={t(item)}
                          className="flex gap-3 text-sm leading-6 text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{t(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {badgeGroups ? (
        <Section spacing="md" className="bg-surface">
          <Container>
            <SectionHeader
              eyebrow={t(
                badgeGroups.eyebrow ?? pageContent.badgeGroupsEyebrow
              )}
              title={t(badgeGroups.title ?? pageContent.badgeGroupsTitle)}
              description={
                badgeGroups.description
                  ? t(badgeGroups.description)
                  : undefined
              }
              align="center"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {badgeGroups.groups.map((group) => (
                <Card key={t(group.title)} padding="lg" className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {t(group.title)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <Badge key={t(item)} variant="outline">
                          {t(item)}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {securityPoints.length > 0 ? (
        <CertidocsSecurityFlow
          points={securityPoints}
          eyebrow={t(pageContent.securityPointsEyebrow)}
          title={t(pageContent.securityPointsTitle)}
          description={t(pageContent.securityPointsDescription)}
        />
      ) : null}

      {isCertidocs ? (
        <Section spacing="md" className="bg-surface">
          <Container>
            <SectionHeader
              eyebrow={t(certidocsMediaContent.eyebrow)}
              title={t(certidocsMediaContent.title)}
              description={t(certidocsMediaContent.description)}
              align="center"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <Card padding="none" className="overflow-hidden">
                <div className="grid gap-px bg-border sm:grid-cols-2">
                  {certidocsMediaContent.items.map((item) => (
                    <div key={item.src} className="bg-background p-5">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface-muted">
                        <Image
                          src={item.src}
                          alt={t(item.alt)}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
                          className="object-contain p-3"
                        />
                      </div>

                      <h3 className="mt-4 text-base font-bold tracking-tight text-foreground">
                        {t(item.title)}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-muted">
                        {t(item.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card padding="lg" className="h-full">
                <Badge variant="accent">
                  {t(certidocsReferenceProcessContent.eyebrow)}
                </Badge>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
                  {t(certidocsReferenceProcessContent.title)}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {t(certidocsReferenceProcessContent.description)}
                </p>

                <div className="mt-6 overflow-hidden rounded-lg border border-border bg-surface-muted">
                  <Image
                    src="/images/documents/secure-sticker-issuance-process.jpg"
                    alt={t(certidocsReferenceProcessContent.imageAlt)}
                    width={1024}
                    height={730}
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="h-auto w-full"
                  />
                </div>
              </Card>
            </div>

            <div className="mt-10">
              <div className="max-w-3xl">
                <Badge variant="accent">
                  {t(certidocsRegulatoryContextContent.eyebrow)}
                </Badge>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                  {t(certidocsRegulatoryContextContent.title)}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {t(certidocsRegulatoryContextContent.description)}
                </p>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {certidocsRegulatoryContextContent.items.map((item) => (
                <Card
                  key={item.src}
                  padding="none"
                  className="h-full overflow-hidden"
                >
                  <div className="relative aspect-[4/3] bg-surface-muted md:aspect-[3/2]">
                    <Image
                      src={item.src}
                      alt={t(item.alt)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="p-6 md:p-7">
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {t(item.title)}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {t(item.description)}
                    </p>
                  </div>
                </Card>
              ))}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {operationalServices && isCertidocs ? (
        <Section spacing="md">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <SectionHeader
                eyebrow={t(pageContent.operationalServicesEyebrow)}
                title={t(pageContent.operationalServicesTitle)}
                description={t(pageContent.operationalServicesDescription)}
              />

              <div>
                <p className="text-base leading-8 text-muted">
                  {t(operationalServices.intro)}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {operationalServices.items.map((service) => (
                    <div
                      key={t(service.title)}
                      className="rounded-lg border border-border bg-surface p-5 shadow-card"
                    >
                      <h3 className="text-base font-bold tracking-tight text-foreground">
                        {t(service.title)}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted">
                        {t(service.description)}
                      </p>
                    </div>
                  ))}
                </div>

                <Card padding="lg" variant="muted" className="mt-6">
                  <CardHeader>
                    <CardTitle>{t(pageContent.equipmentTitle)}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {operationalServices.equipment.map((equipment) => (
                        <Badge key={t(equipment)} variant="outline">
                          {t(equipment)}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {securityChain.length > 0 && !isCertidocs ? (
        <Section spacing="md" className="bg-surface">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <SectionHeader
                eyebrow={t(pageContent.securityChainEyebrow)}
                title={t(pageContent.securityChainTitle)}
              />

              <Card padding="lg">
                <CardContent>
                  <ol className="grid gap-4 sm:grid-cols-2">
                    {securityChain.map((item, index) => (
                      <li
                        key={t(item)}
                        className="flex gap-4 rounded-lg border border-border bg-background p-4"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                          {index + 1}
                        </span>
                        <span className="text-sm leading-7 text-muted">
                          {t(item)}
                        </span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>
      ) : null}

      {stakeholderValue.length > 0 ? (
        <Section spacing="md" className="bg-surface">
          <Container>
            <SectionHeader
              eyebrow={t(pageContent.stakeholderValueEyebrow)}
              title={t(pageContent.stakeholderValueTitle)}
              align="center"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {stakeholderValue.map((item) => (
                <Card key={t(item.title)} padding="lg" className="h-full">
                  <CardHeader>
                    <CardTitle>{t(item.title)}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted">
                      {t(item.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {ecosystemActors.length > 0 ? (
              <Card padding="lg" variant="muted" className="mt-6">
                <CardHeader>
                  <CardTitle>{t(pageContent.ecosystemActorsTitle)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {ecosystemActors.map((actor) => (
                      <Badge key={t(actor)} variant="outline">
                        {t(actor)}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : null}
          </Container>
        </Section>
      ) : null}

    </main>
  );
}
