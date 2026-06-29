import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Section spacing="lg">
        <Container size="md">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              PROOFTAG-CATIS
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Une interface structurée avec des composants réutilisables propre.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              Nous venons d’ajouter Container et Section pour organiser les pages
              avec une structure propre et cohérente cool.
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
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Container</CardTitle>
                <CardDescription>
                  Contrôle la largeur du contenu.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Il permet de garder une mise en page stable sur tout le site.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Section</CardTitle>
                <CardDescription>
                  Gère les espacements verticaux.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Il évite de répéter les mêmes classes de padding partout.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Design System</CardTitle>
                <CardDescription>
                  Garantit la cohérence visuelle.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Chaque nouveau composant s’appuie sur les fondations existantes.
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}