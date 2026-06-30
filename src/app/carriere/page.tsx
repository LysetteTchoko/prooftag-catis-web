import { PagePlaceholder } from "@/components/shared/page-placeholder";
import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Carrière",
  description:
    "Découvrez prochainement les opportunités de collaboration avec PROOFTAG CATIS.",
  pathname: "/carriere",
});
export default function CarrierePage() {
  return (
    <PagePlaceholder
      eyebrow="Carrière"
      title="Rejoindre PROOFTAG-CATIS"
      description="Découvrez prochainement les opportunités de collaboration et les profils recherchés pour accompagner le développement des solutions PROOFTAG-CATIS."
    />
  );
}