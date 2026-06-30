import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HomeCTA() {
  return (
    <Section spacing="md" className="bg-surface">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-primary p-8 text-primary-foreground shadow-soft md:p-12 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(20,165,245,0.35),transparent_35%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <Badge
                variant="outline"
                className="border-white/30 bg-white/10 text-white"
              >
                Passer à l’action
              </Badge>

              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
                Vous souhaitez sécuriser vos documents ou vos opérations ?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                Échangez avec PROOFTAG CATIS pour identifier la solution la plus
                adaptée à vos enjeux de sécurité, de vérification et de
                traçabilité.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/contact">
                    Contacter l’équipe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/solutions">Voir les solutions</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
                <ShieldCheck className="h-7 w-7 text-accent-light" />

                <p className="mt-4 text-sm font-semibold text-white">
                  Sécurité & confiance
                </p>

                <p className="mt-2 text-sm leading-6 text-white/75">
                  Des solutions pensées pour les environnements où la fiabilité
                  des informations est essentielle.
                </p>
              </div>

              <div className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
                <Mail className="h-7 w-7 text-accent-light" />

                <p className="mt-4 text-sm font-semibold text-white">
                  Échange professionnel
                </p>

                <p className="mt-2 text-sm leading-6 text-white/75">
                  Une prise de contact simple pour comprendre vos besoins et
                  proposer une réponse adaptée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}