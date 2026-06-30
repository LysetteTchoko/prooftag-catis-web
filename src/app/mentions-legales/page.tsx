import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { company } from "@/constants/company";

export const metadata: Metadata = createMetadata({
  title: "Mentions légales",
  description:
    "Consultez les informations légales de base du site PROOFTAG CATIS.",
  pathname: "/mentions-legales",
});
export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="Informations légales"
        title="Mentions légales"
        description="Cette page regroupe les informations légales de base du site. Son contenu devra être vérifié avant la mise en production."
      />

      <Section spacing="md">
        <Container size="md">
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Éditeur du site</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-4 text-sm leading-7 text-muted">
                <p>
                  <strong className="text-foreground">Nom :</strong>{" "}
                  {company.name}
                </p>

                <p>
                  <strong className="text-foreground">Adresse :</strong>{" "}
                  {company.address}
                </p>

                <p>
                  <strong className="text-foreground">Email :</strong>{" "}
                  {company.email}
                </p>

                <p>
                  <strong className="text-foreground">Téléphone :</strong>{" "}
                  {company.phone}
                </p>

                <p>
                  Les informations présentées ici sont provisoires et devront
                  être complétées ou validées avant la publication officielle du
                  site.
                </p>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}