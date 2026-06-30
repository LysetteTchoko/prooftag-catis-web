import {
  BadgeCheck,
  Eye,
  Goal,
  Handshake,
  Network,
  ShieldCheck,
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
import { company } from "@/constants/company";
import {
  companyCommitments,
  companyPillars,
} from "@/data/company-profile";

const pillarIcons = {
  security: ShieldCheck,
  authentication: BadgeCheck,
  traceability: Network,
};

export default function EntreprisePage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="Entreprise"
        title="PROOFTAG-CATIS, acteur de la confiance numérique."
        description="PROOFTAG-CATIS conçoit des solutions numériques pour sécuriser, authentifier et tracer les opérations sensibles."
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <Badge variant="accent">À propos</Badge>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Une entreprise orientée sécurité documentaire et traçabilité.
              </h2>

              <p className="mt-6 text-base leading-8 text-muted">
                {company.description}
              </p>

              <p className="mt-5 text-base leading-8 text-muted">
                L’entreprise accompagne les organisations qui ont besoin de mieux
                protéger leurs documents, vérifier leurs informations et suivre
                leurs processus critiques avec plus de fiabilité.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card padding="lg" className="border-primary/20">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Goal className="h-6 w-6" />
                  </div>

                  <CardTitle className="mt-6">Mission</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    Développer des solutions numériques qui renforcent la
                    sécurité, l’authentification et la traçabilité des opérations
                    sensibles.
                  </p>
                </CardContent>
              </Card>

              <Card padding="lg">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Eye className="h-6 w-6" />
                  </div>

                  <CardTitle className="mt-6">Vision</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    Contribuer à un environnement où les documents, les données
                    et les processus peuvent être vérifiés avec plus de confiance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Nos piliers"
            title="Trois piliers au cœur de l’approche PROOFTAG-CATIS."
            description="Les solutions développées par PROOFTAG-CATIS reposent sur une logique claire : sécuriser, authentifier et tracer."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {companyPillars.map((pillar) => {
              const Icon = pillarIcons[pillar.icon];

              return (
                <Card key={pillar.title} padding="lg" className="h-full">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>

                    <CardTitle className="mt-6">{pillar.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted">
                      {pillar.description}
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeader
              eyebrow="Engagements"
              title="Une approche professionnelle, fiable et évolutive."
              description="PROOFTAG-CATIS s’inscrit dans une logique d’amélioration continue, avec des solutions pensées pour répondre aux besoins réels des utilisateurs et des organisations."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {companyCommitments.map((commitment) => (
                <Card key={commitment.title} padding="lg">
                  <CardHeader>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Handshake className="h-5 w-5" />
                    </div>

                    <CardTitle className="mt-5 text-lg">
                      {commitment.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-7 text-muted">
                      {commitment.description}
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