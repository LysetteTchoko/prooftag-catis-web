import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSolutionBySlug, solutions } from "@/data/solutions";

type SolutionDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export default async function SolutionDetailPage({
  params,
}: SolutionDetailPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow={solution.tag}
        title={solution.name}
        description={solution.headline}
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Button asChild variant="ghost" className="-ml-3">
                <Link href="/solutions">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour aux solutions
                </Link>
              </Button>

              <div className="mt-8 rounded-xl border border-border bg-surface p-8 shadow-card">
                <Badge variant={solution.featured ? "primary" : "outline"}>
                  {solution.tag}
                </Badge>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
                  {solution.headline}
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  {solution.description}
                </p>

                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Demander des informations
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <Card padding="lg">
                <CardHeader>
                  <CardTitle>Bénéfices principaux</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4">
                    {solution.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex gap-3 text-sm leading-7 text-muted"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card padding="lg" variant="muted">
                <CardHeader>
                  <CardTitle>Cas d’usage</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {solution.useCases.map((useCase) => (
                      <Badge key={useCase} variant="outline">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card padding="lg">
                <CardHeader>
                  <CardTitle>Fonctionnalités mises en avant</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-3">
                    {solution.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-lg border border-border bg-background p-4 text-sm font-medium text-foreground"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}