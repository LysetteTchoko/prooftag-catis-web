import {
  BarChart3,
  FileCheck2,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { homeProcessSteps } from "@/data/process";

const processIcons = {
  secure: ShieldCheck,
  verify: ScanSearch,
  trace: FileCheck2,
  report: BarChart3,
};

export function HomeProcess() {
  return (
    <Section spacing="md" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(20,165,245,0.12),transparent_35%)]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Notre approche"
              title="Un processus pensé pour renforcer la confiance."
              description="De la sécurisation du document jusqu’à l’exploitation des données, chaque étape vise à rendre les opérations plus fiables, vérifiables et traçables."
            />

            <div className="mt-8 rounded-xl border border-border bg-surface p-6 shadow-card">
              <Badge variant="primary">Méthode PROOFTAG-CATIS</Badge>

              <p className="mt-4 text-sm leading-7 text-muted">
                Cette approche permet de créer un lien clair entre les documents,
                les opérations, les utilisateurs autorisés et les données utiles
                au pilotage.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {homeProcessSteps.map((step) => {
              const Icon = processIcons[step.icon];

              return (
                <Card
                  key={step.number}
                  className="group relative overflow-hidden p-6"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 transition group-hover:opacity-100" />

                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-bold text-accent">
                          {step.number}
                        </span>

                        <h3 className="text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}