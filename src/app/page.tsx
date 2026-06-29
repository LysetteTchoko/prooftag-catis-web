import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Section spacing="lg">
        <Container size="md">
          <div className="text-center">
            <Badge variant="accent">PROOFTAG-CATIS </Badge>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Construire une interface professionnelle composant par composant.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              Nous créons progressivement le Design System avant de construire
              les vraies pages du site.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg">Découvrir</Button>
              <Button variant="outline" size="lg">
                Nous contacter
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Fondations UI"
            title="Des composants réutilisables pour construire plus vite et mieux."
            description="Chaque composant est conçu pour être cohérent, maintenable et réutilisable dans plusieurs sections du site."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Badge</CardTitle>
                <CardDescription>
                  Sert à afficher un label court ou une catégorie.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Il permet d’introduire visuellement une section ou un contenu.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SectionHeader</CardTitle>
                <CardDescription>
                  Standardise les titres de sections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Il évite de répéter les mêmes blocs titre/description partout.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cohérence</CardTitle>
                <CardDescription>
                  Le site garde la même logique visuelle.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Chaque section aura une structure propre et prévisible.
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}