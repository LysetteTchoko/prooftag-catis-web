import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { homeNews } from "@/data/news";

export function HomeNews() {
  return (
    <Section spacing="md">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Actualités & ressources"
            title="Suivre les sujets liés à la sécurité et à la confiance numérique."
            description="Cette section préparera les contenus éditoriaux du site : articles, annonces, ressources et informations utiles."
          />

          <Button asChild variant="outline">
            <Link href="/actualites">
              Toutes les actualités
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {homeNews.map((news) => (
            <Card key={news.title} className="flex h-full flex-col">
              <CardHeader>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <Badge variant="outline">{news.category}</Badge>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Newspaper className="h-5 w-5" />
                  </div>
                </div>

                <CardTitle className="text-xl">{news.title}</CardTitle>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm leading-7 text-muted">
                  {news.description}
                </p>
              </CardContent>

              <CardFooter>
                <Link
                  href={news.href}
                  className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary-hover"
                >
                  Lire la suite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}