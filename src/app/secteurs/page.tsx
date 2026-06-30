import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CarFront,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sectors } from "@/data/sectors";
import { cn } from "@/lib/utils";

const sectorIcons = {
  administration: Building2,
  mobility: CarFront,
  regulated: FileCheck2,
  data: BarChart3,
};

export const metadata: Metadata = createMetadata({
  title: "Secteurs d’application",
  description:
    "Découvrez les secteurs dans lesquels les solutions PROOFTAG CATIS peuvent renforcer la sécurité, la vérification et la traçabilité.",
  pathname: "/secteurs",
});
export default function SecteursPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="Secteurs"
        title="Des solutions adaptées aux environnements où la confiance est essentielle."
        description="Les solutions PROOFTAG-CATIS peuvent accompagner différents acteurs confrontés à des enjeux de sécurité documentaire, de vérification numérique, de conformité et de traçabilité."
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {sectors.map((sector) => {
              const Icon = sectorIcons[sector.icon];

              return (
                <Card
                  key={sector.slug}
                  padding="lg"
                  className={cn(
                    "flex h-full flex-col",
                    sector.featured &&
                      "border-primary/20 bg-gradient-to-br from-surface to-primary/5"
                  )}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      {sector.featured ? (
                        <Badge variant="primary">Secteur clé</Badge>
                      ) : (
                        <Badge variant="outline">Secteur</Badge>
                      )}
                    </div>

                    <CardTitle className="mt-6">{sector.title}</CardTitle>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {sector.description}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {sector.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-6 text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button asChild variant={sector.featured ? "primary" : "outline"}>
                      <Link href={sector.href}>
                        Explorer ce secteur
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
    </main>
  );
}