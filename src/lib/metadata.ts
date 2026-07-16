import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/constants/locales";
import { siteConfig } from "@/constants/site";
import {
  getLocalizedString,
  localizePathname,
  type LocalizedString,
} from "@/lib/i18n";

type CreateMetadataOptions = {
  title?: string;
  description?: string;
  pathname?: string;
  locale?: Locale;
};

export function createMetadata({
  title = siteConfig.defaultTitle,
  description = siteConfig.description,
  pathname = "/",
  locale = defaultLocale,
}: CreateMetadataOptions = {}): Metadata {
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  const url = new URL(
    localizePathname(pathname, locale),
    siteConfig.url
  ).toString();
  const languages: Record<string, string> = {
    ...Object.fromEntries(
      locales.map((locale) => [
        locale.code,
        new URL(
          localizePathname(pathname, locale.code),
          siteConfig.url
        ).toString(),
      ])
    ),
    "x-default": new URL(
      localizePathname(pathname, defaultLocale),
      siteConfig.url
    ).toString(),
  };

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale === "en" ? "en_US" : siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

type CreateLocalizedMetadataOptions = {
  title: LocalizedString;
  description: LocalizedString;
  pathname?: string;
  locale: Locale;
};

export function createLocalizedMetadata({
  title,
  description,
  pathname = "/",
  locale,
}: CreateLocalizedMetadataOptions): Metadata {
  return createMetadata({
    title: getLocalizedString(title, locale),
    description: getLocalizedString(description, locale),
    pathname,
    locale,
  });
}
