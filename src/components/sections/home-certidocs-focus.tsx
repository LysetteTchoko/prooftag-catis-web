import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
  QrCode,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { certidocsHighlights, certidocsSteps } from "@/data/certidocs";

const certidocsIcons = {
  document: FileCheck2,
  verify: QrCode,
  trace: BadgeCheck,
  trust: ShieldCheck,
};

export function HomeCertidocsFocus() {
  return (
    <Section spacing="md" className="bg-surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Focus solution"
              title="Certidocs CT, une solution phare pour le contrôle technique."
              description="Certidocs CT accompagne la sécurisation, la vérification et la traçabilité des opérations liées au contrôle technique automobile."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {certidocsHighlights.map((item) => {
                const Icon = certidocsIcons[item.icon];

                return (
                  <Card key={item.title} className="h-full p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-base font-bold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="relative overflow-hidden border-primary/20 bg-primary p-8 text-primary-foreground shadow-soft md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(20,165,245,0.3),transparent_35%)]" />

            <div className="relative">
              <Badge
                variant="outline"
                className="border-white/30 bg-white/10 text-white"
              >
                Solution centrale
              </Badge>

              <h3 className="mt-6 text-3xl font-bold tracking-tight">
                Un parcours clair : structurer, sécuriser, vérifier, tracer.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/80">
                Certidocs CT permet de mieux encadrer les informations sensibles
                liées au contrôle technique, afin de renforcer la confiance entre
                les différents acteurs du processus.
              </p>

              <div className="mt-8 space-y-4">
                {certidocsSteps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur"
                  >
                    <div className="flex gap-4">
                      <span className="text-sm font-bold text-accent-light">
                        {step.number}
                      </span>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          {step.title}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-white/75">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/solutions/certidocs-ct">
                    Découvrir Certidocs CT
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}