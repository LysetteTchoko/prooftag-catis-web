import {
  BarChart3,
  CarFront,
  ClipboardCheck,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { homeExpertises } from "@/data/expertises";
import { cn } from "@/lib/utils";

const expertiseIcons = {
  security: ShieldCheck,
  road: CarFront,
  verification: ScanSearch,
  data: BarChart3,
  support: ClipboardCheck,
};

export function HomeExpertises() {
  return (
    <Section spacing="md" className="bg-surface">
      <Container>
        <SectionHeader
          eyebrow="Nos expertises"
          title="Une expertise au service de la sécurité, de la confiance et de la performance."
          description="PROOFTAG CATIS combine sécurité documentaire, outils numériques, vérification et analyse de données pour répondre aux besoins des environnements sensibles."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeExpertises.map((expertise) => {
            const Icon =
              expertiseIcons[expertise.icon as keyof typeof expertiseIcons];

            return (
              <Card
                key={expertise.title}
                className={cn(
                  "h-full",
                  expertise.featured &&
                    "lg:col-span-2 border-primary/20 bg-gradient-to-br from-surface to-primary/5"
                )}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>

                    {expertise.featured ? (
                      <Badge variant="primary">Expertise clé</Badge>
                    ) : null}
                  </div>

                  <CardTitle className="mt-6">{expertise.title}</CardTitle>

                  <CardDescription>{expertise.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 text-sm text-muted">
                    {expertise.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}