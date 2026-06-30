import {
  BarChart3,
  Building2,
  CarFront,
  FileCheck2,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { homeSectors } from "@/data/sectors";

const sectorIcons = {
  administration: Building2,
  mobility: CarFront,
  regulated: FileCheck2,
  data: BarChart3,
};

export function HomeSectors() {
  return (
    <Section spacing="md">
      <Container>
        <SectionHeader
          eyebrow="Secteurs d’application"
          title="Des solutions pensées pour les environnements où la confiance est essentielle."
          description="Les solutions PROOFTAG-CATIS peuvent accompagner différents acteurs confrontés à des enjeux de sécurité documentaire, de vérification numérique et de traçabilité."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homeSectors.map((sector) => {
            const Icon = sectorIcons[sector.icon];

            return (
              <Card
                key={sector.title}
                className="group h-full p-6 hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-foreground">
                  {sector.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {sector.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}