import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NewsDetailContent } from "@/components/pages/news-detail-content";
import { getNewsBySlug, news } from "@/data/news";
import { getLocalizedString } from "@/lib/i18n";
import { createLocalizedMetadata, createMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const notFoundMetadata = {
  title: {
    fr: "Ressource introuvable",
    en: "Resource not found",
  },
  description: {
    fr: "La ressource demandée est introuvable.",
    en: "The requested resource could not be found.",
  },
} as const;

export function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    return createLocalizedMetadata({
      ...notFoundMetadata,
      pathname: "/actualites",
      locale,
    });
  }

  return createMetadata({
    title: getLocalizedString(item.title, locale),
    description: getLocalizedString(item.description, locale),
    pathname: item.href,
    locale,
  });
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  return <NewsDetailContent item={item} />;
}
