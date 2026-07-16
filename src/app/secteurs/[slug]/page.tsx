import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SectorDetailContent } from "@/components/pages/sector-detail-content";
import { getSectorBySlug, sectors } from "@/data/sectors";
import { getLocalizedString } from "@/lib/i18n";
import { createLocalizedMetadata, createMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

type SectorDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const notFoundMetadata = {
  title: {
    fr: "Secteur introuvable",
    en: "Sector not found",
  },
  description: {
    fr: "Le secteur demandé est introuvable.",
    en: "The requested sector could not be found.",
  },
} as const;

export function generateStaticParams() {
  return sectors.map((sector) => ({
    slug: sector.slug,
  }));
}

export async function generateMetadata({
  params,
}: SectorDetailPageProps): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    return createLocalizedMetadata({
      ...notFoundMetadata,
      pathname: "/secteurs",
      locale,
    });
  }

  return createMetadata({
    title: getLocalizedString(sector.title, locale),
    description: getLocalizedString(sector.description, locale),
    pathname: sector.href,
    locale,
  });
}

export default async function SectorDetailPage({
  params,
}: SectorDetailPageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    notFound();
  }

  return <SectorDetailContent sector={sector} />;
}
