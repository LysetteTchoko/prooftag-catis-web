"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Eye,
  FileCheck2,
  Goal,
  Handshake,
  Landmark,
  Network,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  companyCommitments,
  companyEcosystemRoles,
  companyPillars,
  companyTechnologyItems,
  companyTimeline,
} from "@/data/company-profile";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  type LocalizedString,
} from "@/lib/i18n";

const pillarIcons = {
  security: ShieldCheck,
  authentication: BadgeCheck,
  traceability: Network,
} satisfies Record<(typeof companyPillars)[number]["icon"], LucideIcon>;

const ecosystemIcons = {
  centers: Building2,
  authorities: Landmark,
  technology: Network,
  users: Users,
} satisfies Record<(typeof companyEcosystemRoles)[number]["icon"], LucideIcon>;

const companyImageAlt = {
  fr: "Remise institutionnelle impliquant PROOFTAG CATIS au Cameroun",
  en: "Institutional handover involving PROOFTAG CATIS in Cameroon",
} as const;

const companyInstitutionalVisuals = [
  {
    src: "/images/company/prooftag-catis-dashboard-presentation.jpg",
    width: 1200,
    height: 800,
    alt: {
      fr: "Présentation d’un tableau de bord numérique à des acteurs institutionnels",
      en: "Presentation of a digital dashboard to institutional stakeholders",
    },
    title: {
      fr: "Pilotage numérique",
      en: "Digital monitoring",
    },
    description: {
      fr: "Une mise en visibilité des données et des outils numériques utiles au suivi des opérations.",
      en: "Visibility over data and digital tools used to monitor operations.",
    },
  },
  {
    src: "/images/company/prooftag-catis-institutional-group.jpg",
    width: 1024,
    height: 683,
    alt: {
      fr: "Photo institutionnelle de groupe liée aux activités de PROOFTAG CATIS",
      en: "Institutional group photo related to PROOFTAG CATIS activities",
    },
    title: {
      fr: "Ancrage institutionnel",
      en: "Institutional presence",
    },
    description: {
      fr: "Une présence construite avec les acteurs publics et opérationnels de l’écosystème transport.",
      en: "A presence built with public and operational stakeholders in the transport ecosystem.",
    },
  },
] as const;

const pageContent = {
  eyebrow: {
    fr: "Entreprise",
    en: "Company",
  },
  title: {
    fr: "PROOFTAG CATIS, acteur camerounais de la confiance dans le transport.",
    en: "PROOFTAG CATIS, a Cameroonian trust player for transport.",
  },
  description: {
    fr: "PROOFTAG CATIS accompagne la modernisation du contrôle technique, la sécurité documentaire et la sécurité routière avec des solutions numériques, de traçabilité et d’authentification.",
    en: "PROOFTAG CATIS supports the modernization of vehicle inspection, document security and road safety with digital traceability and authentication solutions.",
  },
  aboutBadge: {
    fr: "À propos",
    en: "About",
  },
  aboutTitle: {
    fr: "Une entreprise au service de processus plus fiables.",
    en: "A company serving more reliable processes.",
  },
  aboutDescription: {
    fr: "PROOFTAG CATIS intervient au Cameroun auprès de l’écosystème du transport pour sécuriser les documents, fiabiliser les données et soutenir les usages terrain liés au contrôle technique.",
    en: "PROOFTAG CATIS works in Cameroon with the transport ecosystem to secure documents, improve data reliability and support field uses related to vehicle inspection.",
  },
  aboutComplement: {
    fr: "Son approche associe technologie, traçabilité, accompagnement opérationnel et lutte contre la fraude documentaire afin de renforcer la confiance entre usagers, centres, partenaires et autorités.",
    en: "Its approach combines technology, traceability, operational support and document fraud prevention to strengthen trust between users, centers, partners and authorities.",
  },
  missionTitle: {
    fr: "Mission",
    en: "Mission",
  },
  missionDescription: {
    fr: "Moderniser, sécuriser et fiabiliser les processus liés au transport et au contrôle technique grâce à des solutions numériques adaptées aux réalités opérationnelles.",
    en: "Modernize, secure and improve the reliability of transport and vehicle inspection processes through digital solutions adapted to operational realities.",
  },
  visionTitle: {
    fr: "Vision",
    en: "Vision",
  },
  visionDescription: {
    fr: "Contribuer à un environnement où les documents, les contrôles et les données critiques peuvent être vérifiés avec plus de confiance.",
    en: "Contribute to an environment where documents, inspections and critical data can be verified with greater confidence.",
  },
  historyEyebrow: {
    fr: "Historique",
    en: "History",
  },
  historyTitle: {
    fr: "Un ancrage progressif dans l’écosystème camerounais.",
    en: "A progressive presence in Cameroon’s ecosystem.",
  },
  historyDescription: {
    fr: "L’histoire récente de PROOFTAG CATIS s’inscrit dans la modernisation des outils de contrôle, de sécurisation et de suivi des informations liées au transport.",
    en: "PROOFTAG CATIS’ recent history is part of the modernization of tools used to inspect, secure and monitor transport-related information.",
  },
  institutionalVisualsEyebrow: {
    fr: "Terrain & institutionnel",
    en: "Field & institutional",
  },
  institutionalVisualsTitle: {
    fr: "Des preuves visuelles de l’activité et de l’écosystème.",
    en: "Visual evidence of activity and ecosystem involvement.",
  },
  institutionalVisualsDescription: {
    fr: "Ces visuels replacent PROOFTAG CATIS dans son contexte réel : présentation d’outils numériques, échanges institutionnels et collaboration avec les acteurs du transport.",
    en: "These visuals place PROOFTAG CATIS in its real context: digital tool presentations, institutional exchanges and collaboration with transport stakeholders.",
  },
  technologyEyebrow: {
    fr: "Partenariat & technologie",
    en: "Partnership & technology",
  },
  technologyTitle: {
    fr: "Un partenariat technologique orienté authentification et traçabilité.",
    en: "A technology partnership focused on authentication and traceability.",
  },
  technologyDescription: {
    fr: "La relation avec Prooftag SAS apporte un socle technologique que PROOFTAG CATIS adapte aux besoins locaux, notamment autour de Certidocs CT.",
    en: "The relationship with Prooftag SAS brings a technology foundation that PROOFTAG CATIS adapts to local needs, especially around Certidocs CT.",
  },
  pillarsEyebrow: {
    fr: "Mission",
    en: "Mission",
  },
  pillarsTitle: {
    fr: "Technologie, traçabilité et sécurité routière dans une même logique.",
    en: "Technology, traceability and road safety in one operating logic.",
  },
  pillarsDescription: {
    fr: "Les solutions développées et déployées par PROOFTAG CATIS visent à rendre les processus plus vérifiables, plus transparents et plus résistants à la fraude.",
    en: "The solutions developed and deployed by PROOFTAG CATIS aim to make processes more verifiable, more transparent and more resistant to fraud.",
  },
  ecosystemEyebrow: {
    fr: "Rôle dans l’écosystème",
    en: "Role in the ecosystem",
  },
  ecosystemTitle: {
    fr: "Un rôle d’interface entre technologie, centres et contrôle terrain.",
    en: "An interface role between technology, centers and field control.",
  },
  ecosystemDescription: {
    fr: "PROOFTAG CATIS intervient comme partenaire technique et opérationnel pour aider les acteurs concernés à produire, sécuriser, consulter et vérifier les informations utiles.",
    en: "PROOFTAG CATIS acts as a technical and operational partner helping stakeholders produce, secure, access and verify useful information.",
  },
  commitmentsEyebrow: {
    fr: "Engagements",
    en: "Commitments",
  },
  commitmentsTitle: {
    fr: "Une approche professionnelle, fiable et évolutive.",
    en: "A professional, reliable and scalable approach.",
  },
  commitmentsDescription: {
    fr: "PROOFTAG CATIS s’inscrit dans une logique d’amélioration continue, avec des solutions pensées pour répondre aux besoins réels des utilisateurs, des centres et des organisations.",
    en: "PROOFTAG CATIS follows a continuous improvement approach, with solutions designed to meet the real needs of users, centers and organizations.",
  },
} as const;

export function CompanyPageContent() {
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
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <Badge variant="accent">{t(pageContent.aboutBadge)}</Badge>

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-5xl">
                {t(pageContent.aboutTitle)}
              </h2>

              <p className="mt-6 text-base leading-8 text-muted">
                {t(pageContent.aboutDescription)}
              </p>

              <p className="mt-5 text-base leading-8 text-muted">
                {t(pageContent.aboutComplement)}
              </p>
            </div>

            <div className="grid gap-6">
              <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-card">
                <Image
                  src="/images/company/prooftag-catis-institutional-handover.jpg"
                  alt={t(companyImageAlt)}
                  width={1024}
                  height={683}
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card padding="lg" className="border-primary/20">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Goal className="h-6 w-6" />
                    </div>

                    <CardTitle className="mt-6">
                      {t(pageContent.missionTitle)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted">
                      {t(pageContent.missionDescription)}
                    </p>
                  </CardContent>
                </Card>

                <Card padding="lg">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Eye className="h-6 w-6" />
                    </div>

                    <CardTitle className="mt-6">
                      {t(pageContent.visionTitle)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted">
                      {t(pageContent.visionDescription)}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="bg-surface">
        <Container>
          <SectionHeader
            eyebrow={t(pageContent.historyEyebrow)}
            title={t(pageContent.historyTitle)}
            description={t(pageContent.historyDescription)}
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {companyTimeline.map((item) => (
              <Card key={t(item.period)} padding="lg" className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CalendarDays className="h-6 w-6" />
                  </div>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                    {t(item.period)}
                  </p>

                  <CardTitle className="mt-3 text-lg">
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

          <div className="mt-14">
            <SectionHeader
              eyebrow={t(pageContent.institutionalVisualsEyebrow)}
              title={t(pageContent.institutionalVisualsTitle)}
              description={t(pageContent.institutionalVisualsDescription)}
              align="center"
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {companyInstitutionalVisuals.map((visual) => (
                <Card
                  key={visual.src}
                  padding="none"
                  className="h-full overflow-hidden"
                >
                  <Image
                    src={visual.src}
                    alt={t(visual.alt)}
                    width={visual.width}
                    height={visual.height}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="aspect-[16/10] w-full object-cover"
                  />

                  <div className="p-6 md:p-7">
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
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

      <Section spacing="md">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeader
              eyebrow={t(pageContent.technologyEyebrow)}
              title={t(pageContent.technologyTitle)}
              description={t(pageContent.technologyDescription)}
            />

            <div className="grid gap-5">
              {companyTechnologyItems.map((item) => (
                <Card key={t(item.title)} padding="lg">
                  <CardHeader>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <FileCheck2 className="h-5 w-5" />
                    </div>

                    <CardTitle className="mt-5 text-lg">
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
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="bg-surface">
        <Container>
          <SectionHeader
            eyebrow={t(pageContent.pillarsEyebrow)}
            title={t(pageContent.pillarsTitle)}
            description={t(pageContent.pillarsDescription)}
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {companyPillars.map((pillar) => {
              const Icon = pillarIcons[pillar.icon];

              return (
                <Card key={t(pillar.title)} padding="lg" className="h-full">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>

                    <CardTitle className="mt-6">
                      {t(pillar.title)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted">
                      {t(pillar.description)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <SectionHeader
            eyebrow={t(pageContent.ecosystemEyebrow)}
            title={t(pageContent.ecosystemTitle)}
            description={t(pageContent.ecosystemDescription)}
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {companyEcosystemRoles.map((role) => {
              const Icon = ecosystemIcons[role.icon];

              return (
                <Card key={t(role.title)} padding="lg" className="h-full">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>

                    <CardTitle className="mt-6">
                      {t(role.title)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted">
                      {t(role.description)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeader
              eyebrow={t(pageContent.commitmentsEyebrow)}
              title={t(pageContent.commitmentsTitle)}
              description={t(pageContent.commitmentsDescription)}
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {companyCommitments.map((commitment) => (
                <Card key={t(commitment.title)} padding="lg">
                  <CardHeader>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Handshake className="h-5 w-5" />
                    </div>

                    <CardTitle className="mt-5 text-lg">
                      {t(commitment.title)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted">
                      {t(commitment.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
