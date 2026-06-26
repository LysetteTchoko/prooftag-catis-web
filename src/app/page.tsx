import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="max-w-3xl rounded-xl bg-surface p-10 text-center shadow-card">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          PROOFTAG-CATIS
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Sécuriser, authentifier et tracer les opérations sensibles.
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted">
          un test ui.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg">
            Découvrir le projet
          </Button>

          <Button variant="outline" size="lg">
            Nous contacter
          </Button>
        </div>
      </section>
    </main>
  );
}