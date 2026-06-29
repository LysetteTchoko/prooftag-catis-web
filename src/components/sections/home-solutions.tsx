import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { homeSolutions } from "@/data/solutions";
import { cn } from "@/lib/utils";

const solutionIcons = {
  certidocs: ShieldCheck,
  verif: ScanSearch,
  doser: ClipboardCheck,
};

export function HomeSolutions() {
  return (
    <Section spacing="md">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Nos solutions"
            title="Des outils numériques pour sécuriser, vérifier et tracer."
            description="PROOFTAG CATIS développe des solutions adaptées aux environnements sensibles, avec une attention particulière portée à la fiabilité, à la sécurité et à la traçabilité."
          />

          <div className="grid gap-6">
            {homeSolutions.map((solution) => {
              const Icon =
                solutionIcons[solution.icon as keyof typeof solutionIcons];

              return (
                <Card
                  key={solution.name}
                  className={cn(
                    "h-full",
                    solution.featured &&
                      "border-primary/20 bg-gradient-to-br from-surface to-primary/5"
                  )}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      <Badge variant={solution.featured ? "primary" : "outline"}>
                        {solution.tag}
                      </Badge>
                    </div>

                    <CardTitle className="mt-6">{solution.name}</CardTitle>

                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="grid gap-3 text-sm text-muted sm:grid-cols-3">
                      {solution.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      asChild
                      variant={solution.featured ? "primary" : "outline"}
                      size="sm"
                    >
                      <Link href={solution.href}>
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}