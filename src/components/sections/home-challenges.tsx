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

const challenges = [
  {
    icon: Building2,
    title: "Administrations & structures publiques",
    description:
      "Sécuriser les documents sensibles et simplifier les processus de vérification.",
  },
  {
    icon: CarFront,
    title: "Centres de contrôle technique",
    description:
      "Digitaliser les opérations, renforcer la conformité et fiabiliser les contrôles.",
  },
  {
    icon: ShieldCheck,
    title: "Entreprises & organisations",
    description:
      "Protéger les données importantes et améliorer la traçabilité des processus.",
  },
  {
    icon: BarChart3,
    title: "Données fiables, décisions éclairées",
    description:
      "Exploiter des informations structurées pour mieux suivre les activités critiques.",
  },
];

export function HomeChallenges() {
  return (
    <Section spacing="md" className="bg-surface">
      <Container>
        <SectionHeader
          eyebrow="Nos solutions au service de vos enjeux"
          title="Des solutions conçues pour des environnements exigeants."
          description="PROOFTAG-CATIS développe des outils numériques fiables pour renforcer la sécurité, la transparence et la performance des opérations sensibles."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;

            return (
              <Card key={challenge.title} className="h-full">
                <CardHeader>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <CardTitle className="text-lg">{challenge.title}</CardTitle>

                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-6 text-muted">
                    Une réponse numérique adaptée aux besoins de sécurité,
                    d’authentification et de traçabilité.
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