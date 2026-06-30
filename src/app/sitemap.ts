import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site";
import { expertises } from "@/data/expertises";
import { news } from "@/data/news";
import { sectors } from "@/data/sectors";
import { solutions } from "@/data/solutions";

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

  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}