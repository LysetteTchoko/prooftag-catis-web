import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";

type CreateMetadataOptions = {
  title?: string;
  description?: string;
  pathname?: string;
};

export function createMetadata({
  title = siteConfig.defaultTitle,
  description = siteConfig.description,
  pathname = "/",
}: CreateMetadataOptions = {}): Metadata {
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  const url = new URL(pathname, siteConfig.url).toString();

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}