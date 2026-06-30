import {
  Building2,
  CarFront,
  Handshake,
  Network,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { homePartners } from "@/data/partners";

const partnerIcons = {
  administration: Building2,
  control: CarFront,
  organization: Handshake,
  technology: Network,
};

export function HomePartners() {
  return (
    <Section spacing="md" className="bg-surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Partenaires & écosystème"
              title="Un réseau d’acteurs engagés autour de la confiance numérique."
              description="PROOFTAG-CATIS s’inscrit dans un environnement où la collaboration avec les acteurs publics, techniques et organisationnels est essentielle pour renforcer la sécurité et la traçabilité."
            />

            <div className="mt-8 rounded-xl border border-border bg-background p-6">
              <Badge variant="primary">Approche collaborative</Badge>

              <p className="mt-4 text-sm leading-7 text-muted">
                La valeur des solutions repose aussi sur leur capacité à
                s’intégrer dans des processus existants, avec des acteurs
                identifiés, des responsabilités claires et des données fiables.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {homePartners.map((partner) => {
              const Icon = partnerIcons[partner.icon];

              return (
                <Card key={partner.title} className="h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-foreground">
                    {partner.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {partner.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}