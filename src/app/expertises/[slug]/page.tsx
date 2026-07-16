import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ExpertiseDetailContent } from "@/components/pages/expertise-detail-content";
import {
  expertises,
  getExpertiseBySlug,
} from "@/data/expertises";
import { getLocalizedString } from "@/lib/i18n";
import { createLocalizedMetadata, createMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

type ExpertiseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const notFoundMetadata = {
  title: {
    fr: "Expertise introuvable",
    en: "Expertise not found",
  },
  description: {
    fr: "L'expertise demandée est introuvable.",
    en: "The requested expertise could not be found.",
  },
} as const;

export function generateStaticParams() {
  return expertises.map((expertise) => ({
    slug: expertise.slug,
  }));
}

export async function generateMetadata({
  params,
}: ExpertiseDetailPageProps): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { slug } = await params;
  const expertise = getExpertiseBySlug(slug);

  if (!expertise) {
    return createLocalizedMetadata({
      ...notFoundMetadata,
      pathname: "/expertises",
      locale,
    });
  }

  return createMetadata({
    title: getLocalizedString(expertise.title, locale),
    description: getLocalizedString(expertise.description, locale),
    pathname: expertise.href,
    locale,
  });
}

export default async function ExpertiseDetailPage({
  params,
}: ExpertiseDetailPageProps) {
  const { slug } = await params;
  const expertise = getExpertiseBySlug(slug);

  if (!expertise) {
    notFound();
  }

  return <ExpertiseDetailContent expertise={expertise} />;
}
