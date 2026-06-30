import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <Section spacing="md">
        <Container size="md">
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Page en construction</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm leading-7 text-muted">
                Cette page existe maintenant dans l’architecture du site. Son
                contenu détaillé sera construit dans les prochaines étapes, avec
                la même logique de composants réutilisables que la page
                d’accueil.
              </p>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}