"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Building2,
  CarFront,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";

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
import type { Sector } from "@/data/sectors";
import { useLocale } from "@/hooks/use-locale";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

const sectorIcons = {
  administration: Building2,
  mobility: CarFront,
  regulated: FileCheck2,
  data: BarChart3,
};

const pageContent = {
  eyebrow: {
    fr: "Secteur d’application",
    en: "Application sector",
  },
  back: {
    fr: "Retour aux secteurs",
    en: "Back to sectors",
  },
  featuredBadge: {
    fr: "Secteur clé",
    en: "Key sector",
  },
  defaultBadge: {
    fr: "Secteur",
    en: "Sector",
  },
  mainIssues: {
    fr: "Enjeux principaux",
    en: "Key challenges",
  },
  concernedActors: {
    fr: "Acteurs concernés",
    en: "Stakeholders involved",
  },
  operationalScope: {
    fr: "Périmètre opérationnel",
    en: "Operational scope",
  },
  whyTitle: {
    fr: "Pourquoi ce secteur est concerné",
    en: "Why this sector is concerned",
  },
  whyDescription: {
    fr: "Ce secteur manipule des informations ou des opérations pour lesquelles la fiabilité, la vérification et la traçabilité sont importantes. Les solutions PROOFTAG CATIS peuvent aider à mieux structurer, sécuriser et suivre ces processus.",
    en: "This sector handles information or operations where reliability, verification and traceability matter. PROOFTAG CATIS solutions can help structure, secure and monitor these processes more effectively.",
  },
  relatedSolutions: {
    fr: "Solutions associées",
    en: "Related solutions",
  },
  relatedDescription: {
    fr: "Selon les besoins du secteur, ces solutions peuvent contribuer à sécuriser les documents, vérifier les informations ou exploiter les données de suivi.",
    en: "Depending on the sector’s needs, these solutions can help secure documents, verify information or use monitoring data.",
  },
  transportVisualsEyebrow: {
    fr: "Contexte terrain",
    en: "Field context",
  },
  transportVisualsTitle: {
    fr: "Le contrôle technique dans ses conditions opérationnelles.",
    en: "Vehicle inspection in operational conditions.",
  },
  transportVisualsDescription: {
    fr: "Ces visuels situent les solutions PROOFTAG CATIS dans le quotidien des centres : équipements, lignes de contrôle, vérifications mécaniques et assistance technique.",
    en: "These visuals place PROOFTAG CATIS solutions in the daily reality of centers: equipment, inspection lanes, mechanical checks and technical support.",
  },
} as const;

const transportVisuals = [
  {
    src: "/images/sectors/vehicle-inspection-autovision-ramp.jpg",
    width: 696,
    height: 429,
    alt: {
      fr: "Véhicule sur une ligne de contrôle technique automobile",
      en: "Vehicle on an automotive inspection lane",
    },
    title: {
      fr: "Lignes de contrôle",
      en: "Inspection lanes",
    },
    description: {
      fr: "Des centres équipés pour réaliser les étapes techniques de la visite.",
      en: "Equipped centers performing the technical steps of an inspection.",
    },
  },
  {
    src: "/images/sectors/vehicle-inspection-autovision-lanes.jpg",
    width: 805,
    height: 315,
    alt: {
      fr: "Vue intérieure d’un centre de contrôle technique avec plusieurs véhicules",
      en: "Interior view of a vehicle inspection center with several vehicles",
    },
    title: {
      fr: "Flux de véhicules",
      en: "Vehicle flow",
    },
    description: {
      fr: "Un environnement où la donnée doit suivre chaque étape du parcours.",
      en: "An environment where data must follow every step of the process.",
    },
  },
  {
    src: "/images/sectors/vehicle-inspection-pit.jpg",
    width: 1024,
    height: 613,
    alt: {
      fr: "Technicien réalisant une vérification sous un véhicule en fosse",
      en: "Technician performing an under-vehicle check in an inspection pit",
    },
    title: {
      fr: "Vérifications mécaniques",
      en: "Mechanical checks",
    },
    description: {
      fr: "Des contrôles terrain qui gagnent à être reliés à des preuves fiables.",
      en: "Field checks that benefit from being linked to reliable evidence.",
    },
  },
  {
    src: "/images/sectors/vehicle-inspection-equipment-team.jpg",
    width: 696,
    height: 331,
    alt: {
      fr: "Techniciens utilisant un équipement de contrôle automobile",
      en: "Technicians using automotive inspection equipment",
    },
    title: {
      fr: "Équipements & assistance",
      en: "Equipment & support",
    },
    description: {
      fr: "Une exploitation qui associe matériel, logiciel et accompagnement.",
      en: "Operations combining hardware, software and support.",
    },
  },
] as const;

type SectorDetailContentProps = {
  sector: Sector;
};

export function SectorDetailContent({ sector }: SectorDetailContentProps) {
  const locale = useLocale();

  const t = (value: LocalizedString) => {
    return getLocalizedString(value, locale);
  };

  const Icon = sectorIcons[sector.icon];
  const whyDescription =
    "why" in sector ? sector.why : pageContent.whyDescription;

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow={t(pageContent.eyebrow)}
        title={t(sector.title)}
        description={t(sector.description)}
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Button asChild variant="ghost" className="-ml-3">
                <Link href={localizePathname("/secteurs", locale)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t(pageContent.back)}
                </Link>
              </Button>

              <div className="mt-8 rounded-xl border border-border bg-surface p-6 shadow-card md:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>

                <Badge
                  variant={sector.featured ? "primary" : "outline"}
                  className="mt-6"
                >
                  {sector.featured
                    ? t(pageContent.featuredBadge)
                    : t(pageContent.defaultBadge)}
                </Badge>

                <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {t(sector.title)}
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  {t(sector.details)}
                </p>

              </div>
            </div>

            <div className="grid gap-6">
              <Card padding="lg">
                <CardHeader>
                  <CardTitle>{t(pageContent.mainIssues)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4">
                    {sector.points.map((point) => (
                      <li
                        key={t(point)}
                        className="flex gap-3 text-sm leading-7 text-muted"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                        <span>{t(point)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {"actors" in sector ? (
                <Card padding="lg">
                  <CardHeader>
                    <CardTitle>{t(pageContent.concernedActors)}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {sector.actors.map((actor) => (
                        <Badge
                          key={t(actor)}
                          variant="outline"
                          className="normal-case leading-5 tracking-normal"
                        >
                          {t(actor)}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : null}

              {"operationalScope" in sector ? (
                <Card padding="lg">
                  <CardHeader>
                    <CardTitle>{t(pageContent.operationalScope)}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-4">
                      {sector.operationalScope.map((item) => (
                        <li
                          key={t(item)}
                          className="flex gap-3 text-sm leading-7 text-muted"
                        >
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                          <span>{t(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ) : null}

              <Card padding="lg" variant="muted">
                <CardHeader>
                  <CardTitle>{t(pageContent.whyTitle)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    {t(whyDescription)}
                  </p>
                </CardContent>
              </Card>

              <Card padding="lg">
                <CardHeader>
                  <CardTitle>{t(pageContent.relatedSolutions)}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline">Certidocs CT</Badge>
                    <Badge variant="outline">CT-VERIF</Badge>
                    <Badge variant="outline">DOSER</Badge>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted">
                    {t(pageContent.relatedDescription)}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {sector.slug === "transport-mobilite" ? (
        <Section spacing="md" className="bg-surface">
          <Container>
            <SectionHeader
              eyebrow={t(pageContent.transportVisualsEyebrow)}
              title={t(pageContent.transportVisualsTitle)}
              description={t(pageContent.transportVisualsDescription)}
              align="center"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {transportVisuals.map((visual) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="aspect-[16/10] w-full object-cover"
                  />

                  <div className="p-6">
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
          </Container>
        </Section>
      ) : null}
    </main>
  );
}
