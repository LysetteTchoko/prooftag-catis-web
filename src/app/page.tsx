import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="max-w-3xl rounded-xl bg-surface p-10 text-center shadow-card">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          PROOFTAG-CATIS
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Desin en cours.
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted">
          un test ui, composant retulisable
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Card>
            <CardHeader>
              <CardTitle>Sécurité documentaire</CardTitle>
              <CardDescription>Protéger les documents sensibles contre la fraude.</CardDescription>
            </CardHeader>
            
            <CardContent>
              Une base essentielle pour l’authentification et la traçabilité.
            </CardContent>

            <CardFooter>
              <Button variant="outline" size="sm">
                Découvrir
              </Button>
            </CardFooter>
          </Card>

          <Card variant="muted">
            <CardHeader>
              <CardTitle>Traçabilité numérique</CardTitle>
              <CardDescription>
                Suivre les opérations critiques de bout en bout.
              </CardDescription>
            </CardHeader>

             <CardContent>
              Une meilleure visibilité sur les processus sensibles.
            </CardContent>

            <CardFooter>
              <Button variant="outline" size="sm">
                Explorer
              </Button>
            </CardFooter>
          </Card>

          <Card variant="outline">
            <CardHeader>
              <CardTitle>Certidocs CT</CardTitle>
              <CardDescription>
                Solution phare pour le contrôle technique automobile.
              </CardDescription>
            </CardHeader>

            <CardContent>
              Centraliser, sécuriser et fiabiliser les opérations.
            </CardContent>

            <CardFooter>
              <Button size="sm">Voir la solution</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}