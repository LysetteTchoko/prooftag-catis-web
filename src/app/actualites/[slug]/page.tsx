import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Newspaper } from "lucide-react";

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
import { getNewsBySlug, news } from "@/data/news";

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow={item.category}
        title={item.title}
        description={item.description}
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <article>
              <Button asChild variant="ghost" className="-ml-3">
                <Link href="/actualites">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour aux actualités
                </Link>
              </Button>

              <Card padding="lg" className="mt-8">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="outline">{item.category}</Badge>
                  <Badge variant="accent">{item.type}</Badge>
                </div>

                <div className="mt-8 space-y-6">
                  {item.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Card>
            </article>

            <aside className="grid gap-6">
              <Card padding="lg">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Newspaper className="h-6 w-6" />
                  </div>

                  <CardTitle className="mt-6">Points à retenir</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4">
                    {item.takeaways.map((takeaway) => (
                      <li
                        key={takeaway}
                        className="flex gap-3 text-sm leading-7 text-muted"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card padding="lg" variant="muted">
                <CardHeader>
                  <CardTitle>À propos de cette ressource</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    Cette ressource est un contenu éditorial générique préparé
                    pour structurer le module Actualités. Elle pourra être
                    remplacée plus tard par un vrai article officiel validé par
                    PROOFTAG-CATIS.
                  </p>
                </CardContent>
              </Card>

              <Card padding="lg">
                <CardHeader>
                  <CardTitle>Besoin d’informations ?</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    Pour en savoir plus sur les solutions PROOFTAG-CATIS,
                    contactez l’équipe.
                  </p>

                  <div className="mt-6">
                    <Button asChild>
                      <Link href="/contact">Contacter l’équipe</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>
    </main>
  );
}