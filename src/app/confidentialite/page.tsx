import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { company } from "@/constants/company";

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="Confidentialité"
        title="Politique de confidentialité"
        description="Cette page présente une base de politique de confidentialité qui devra être complétée avant la mise en production."
      />

      <Section spacing="md">
        <Container size="md">
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Protection des informations</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-5 text-sm leading-7 text-muted">
                <p>
                  {company.name} accorde de l’importance à la confidentialité
                  des informations transmises via son site internet.
                </p>

                <p>
                  Les informations envoyées via le formulaire de contact sont
                  destinées à permettre un échange professionnel avec l’équipe.
                </p>

                <p>
                  Cette page est une base provisoire. Elle devra être complétée
                  avec les informations exactes concernant la collecte, le
                  traitement, la conservation et la protection des données avant
                  la publication officielle du site.
                </p>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}