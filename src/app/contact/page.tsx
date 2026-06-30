import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/constants/company";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value: company.email,
    description: "Pour les demandes d’informations et les échanges professionnels.",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: company.phone,
    description: "Pour entrer directement en contact avec l’équipe.",
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: company.address,
    description: "PROOFTAG CATIS est basée à Douala, Cameroun.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contactez PROOFTAG CATIS pour échanger sur vos besoins en sécurité documentaire, vérification numérique et traçabilité.",
  pathname: "/contact",
});
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        eyebrow="Contact"
        title="Échanger avec PROOFTAG CATIS"
        description="Contactez l’équipe pour discuter de vos besoins en sécurité documentaire, vérification numérique et traçabilité."
      />

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="grid gap-5">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} padding="lg">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      <CardTitle className="mt-6">{item.title}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm font-semibold text-foreground">
                        {item.value}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-muted">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}

              <Card padding="lg" variant="muted">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <CardTitle className="mt-6">
                    Une prise de contact orientée solution
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-7 text-muted">
                    Vous pouvez présenter votre contexte, vos contraintes et vos
                    objectifs. L’équipe pourra ensuite vous orienter vers la
                    solution la plus adaptée.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card padding="lg" className="border-primary/20">
              <CardHeader>
                <Badge variant="accent">Formulaire de contact</Badge>

                <CardTitle className="mt-6">
                  Présentez votre demande
                </CardTitle>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Ce formulaire prépare l’interface de contact. La connexion à un
                  service d’envoi sera ajoutée dans une prochaine étape.
                </p>
              </CardHeader>

              <CardContent>
                <form className="grid gap-5">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-foreground"
                    >
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      autoComplete="name"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-foreground"
                    >
                      Adresse email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      autoComplete="email"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-foreground"
                    >
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Exemple : Demande d’informations sur Certidocs CT"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre besoin..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="mt-2">
                    Envoyer la demande
                  </Button>

                  <p className="text-xs leading-6 text-muted">
                    Le formulaire n’est pas encore connecté à un service d’envoi.
                    Cette étape viendra après la finalisation des pages.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}