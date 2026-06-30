import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSectorBySlug, sectors } from "@/data/sectors";

const sectorIcons = {
  administration: Building2,
  mobility: CarFront,
  regulated: FileCheck2,
  data: BarChart3,
};

type SectorDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sectors.map((sector) => ({
    slug: sector.slug,
  }));
}

export default async function SectorDetailPage({
  params,
}: SectorDetailPageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    notFound();
  }

  const Icon = sectorIcons[sector.icon];

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="Secteur d’application"
        title={sector.title}
        description={sector.description}
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Button asChild variant="ghost" className="-ml-3">
                <Link href="/secteurs">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour aux secteurs
                </Link>
              </Button>

              <div className="mt-8 rounded-xl border border-border bg-surface p-8 shadow-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>

                <Badge
                  variant={sector.featured ? "primary" : "outline"}
                  className="mt-6"
                >
                  {sector.featured ? "Secteur clé" : "Secteur"}
                </Badge>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
                  {sector.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-muted">
                  {sector.details}
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
                  <CardTitle>Enjeux principaux</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4">
                    {sector.points.map((point) => (
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
                  <CardTitle>Pourquoi ce secteur est concerné</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    Ce secteur manipule des informations ou des opérations pour
                    lesquelles la fiabilité, la vérification et la traçabilité
                    sont importantes. Les solutions PROOFTAG CATIS peuvent aider
                    à mieux structurer, sécuriser et suivre ces processus.
                  </p>
                </CardContent>
              </Card>

              <Card padding="lg">
                <CardHeader>
                  <CardTitle>Solutions associées</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline">Certidocs CT</Badge>
                    <Badge variant="outline">CT-VERIF</Badge>
                    <Badge variant="outline">DOSER</Badge>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted">
                    Selon les besoins du secteur, ces solutions peuvent
                    contribuer à sécuriser les documents, vérifier les
                    informations ou exploiter les données de suivi.
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