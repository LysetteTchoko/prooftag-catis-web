import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SolutionDetailContent } from "@/components/pages/solution-detail-content";
import {
  getSolutionBySlug,
  solutions,
} from "@/data/solutions";
import { getLocalizedString } from "@/lib/i18n";
import { createLocalizedMetadata, createMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

type SolutionDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const notFoundMetadata = {
  title: {
    fr: "Solution introuvable",
    en: "Solution not found",
  },
  description: {
    fr: "La solution demandée est introuvable.",
    en: "The requested solution could not be found.",
  },
} as const;

export function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({
  params,
}: SolutionDetailPageProps): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return createLocalizedMetadata({
      ...notFoundMetadata,
      pathname: "/solutions",
      locale,
    });
  }

  return createMetadata({
    title: solution.name,
    description: getLocalizedString(solution.description, locale),
    pathname: solution.href,
    locale,
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
