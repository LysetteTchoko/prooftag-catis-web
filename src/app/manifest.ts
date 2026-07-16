import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "PROOFTAG CATIS",
    description: siteConfig.description,
    start_url: "/fr",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f5f63",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
