import type { MetadataRoute } from "next";

import { defaultLocale, locales } from "@/constants/locales";
import { siteConfig } from "@/constants/site";
import { expertises } from "@/data/expertises";
import { news } from "@/data/news";
import { sectors } from "@/data/sectors";
import { solutions } from "@/data/solutions";
import { localizePathname } from "@/lib/i18n";

const staticRoutes = [
  "/",
  "/entreprise",
  "/expertises",
  "/solutions",
  "/secteurs",
  "/actualites",
  "/contact",
  "/carriere",
  "/mentions-legales",
  "/confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const dynamicRoutes = [
    ...solutions.map((solution) => solution.href),
    ...expertises.map((expertise) => expertise.href),
    ...sectors.map((sector) => sector.href),
    ...news.map((item) => item.href),
  ];

  const routes = [...staticRoutes, ...dynamicRoutes];

  return routes.flatMap((route) => {
    const alternates: Record<string, string> = {
      ...Object.fromEntries(
        locales.map((locale) => [
          locale.code,
          new URL(
            localizePathname(route, locale.code),
            siteConfig.url
          ).toString(),
        ])
      ),
      "x-default": new URL(
        localizePathname(route, defaultLocale),
        siteConfig.url
      ).toString(),
    };

    return locales.map((locale) => ({
      url: alternates[locale.code],
      lastModified,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
      alternates: {
        languages: alternates,
      },
    }));
  });
}
