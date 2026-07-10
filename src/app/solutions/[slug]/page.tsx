import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SolutionDetailContent } from "@/components/pages/solution-detail-content";
import {
  getSolutionBySlug,
  solutions,
} from "@/data/solutions";
import { getLocalizedString } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

type SolutionDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({
  params,
}: SolutionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return createMetadata({
      title: "Solution introuvable",
      description: "La solution demandée est introuvable.",
      pathname: "/solutions",
    });
  }

  return createMetadata({
    title: solution.name,
    description: getLocalizedString(solution.description, "fr"),
    pathname: solution.href,
  });
}

export default async function SolutionDetailPage({
  params,
}: SolutionDetailPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return <SolutionDetailContent solution={solution} />;
}