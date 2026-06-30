import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BarChart3,
  CarFront,
  CheckCircle2,
  ClipboardCheck,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

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
import {
  expertises,
  getExpertiseBySlug,
} from "@/data/expertises";

const expertiseIcons = {
  security: ShieldCheck,
  road: CarFront,
  verification: ScanSearch,
  data: BarChart3,
  support: ClipboardCheck,
};

type ExpertiseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return expertises.map((expertise) => ({
    slug: expertise.slug,
  }));
}

export default async function ExpertiseDetailPage({
  params,
}: ExpertiseDetailPageProps) {
  const { slug } = await params;
  const expertise = getExpertiseBySlug(slug);

  if (!expertise) {
    notFound();
  }

  const Icon = expertiseIcons[expertise.icon];

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="Expertise"
        title={expertise.title}
        description={expertise.description}
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Button asChild variant="ghost" className="-ml-3">
                <Link href="/expertises">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour aux expertises
                </Link>
              </Button>

              <div className="mt-8 rounded-xl border border-border bg-surface p-8 shadow-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>

                <Badge
                  variant={expertise.featured ? "primary" : "outline"}
                  className="mt-6"
                >
                  {expertise.featured ? "Expertise clé" : "Expertise"}
                </Badge>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
                  {expertise.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  {expertise.details}
                </p>

                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Échanger avec l’équipe
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <Card padding="lg">
                <CardHeader>
                  <CardTitle>Points clés</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4">
                    {expertise.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-7 text-muted"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card padding="lg" variant="muted">
                <CardHeader>
                  <CardTitle>Pourquoi cette expertise compte</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    Cette expertise permet à PROOFTAG CATIS de construire des
                    solutions plus fiables, plus compréhensibles et mieux
                    adaptées aux environnements où la sécurité, la vérification
                    et la traçabilité sont essentielles.
                  </p>
                </CardContent>
              </Card>

              <Card padding="lg">
                <CardHeader>
                  <CardTitle>Application dans les solutions</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    Cette compétence peut être mobilisée dans les solutions
                    Certidocs CT, CT-VERIF et DOSER, selon les besoins métier et
                    les processus à sécuriser.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}