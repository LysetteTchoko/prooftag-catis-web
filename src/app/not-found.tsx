import Link from "next/link";
import { Home, SearchX } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Section spacing="lg">
        <Container size="md">
          <Card padding="lg" className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <SearchX className="h-8 w-8" />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Erreur 404
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Page introuvable
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
              La page que vous recherchez n’existe pas ou a été déplacée.
              Vous pouvez revenir à l’accueil pour continuer votre navigation.
            </p>

            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Retour à l’accueil
                </Link>
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}