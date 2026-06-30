import {
  ArrowRight,
  BarChart3,
  CarFront,
  CheckCircle2,
  ClipboardCheck,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { expertises } from "@/data/expertises";
import { cn } from "@/lib/utils";

const expertiseIcons = {
  security: ShieldCheck,
  road: CarFront,
  verification: ScanSearch,
  data: BarChart3,
  support: ClipboardCheck,
};

export default function ExpertisesPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="Expertises"
        title="Des expertises au service de la sécurité et de la confiance numérique."
        description="PROOFTAG CATIS combine sécurité documentaire, vérification numérique, traçabilité, analyse de données et accompagnement technique pour répondre aux besoins des environnements sensibles."
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {expertises.map((expertise) => {
              const Icon = expertiseIcons[expertise.icon];

              return (
                <Card
                  key={expertise.slug}
                  padding="lg"
                  className={cn(
                    "flex h-full flex-col",
                    expertise.featured &&
                      "border-primary/20 bg-gradient-to-br from-surface to-primary/5 lg:col-span-2"
                  )}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      {expertise.featured ? (
                        <Badge variant="primary">Expertise clé</Badge>
                      ) : (
                        <Badge variant="outline">Expertise</Badge>
                      )}
                    </div>

                    <CardTitle className="mt-6">{expertise.title}</CardTitle>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {expertise.description}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {expertise.points.map((point) => (
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
                    <Button asChild variant="outline">
                      <Link href={expertise.href}>
                        Explorer
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