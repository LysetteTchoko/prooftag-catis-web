import type { Metadata } from "next";

import { SolutionsPageContent } from "@/components/pages/solutions-page-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Solutions",
  description:
    "Découvrez les solutions PROOFTAG CATIS : Certidocs CT, CT-VERIF et DOSER pour sécuriser, vérifier et tracer les opérations sensibles.",
  pathname: "/solutions",
});

export default function SolutionsPage() {
  return <SolutionsPageContent />;
}