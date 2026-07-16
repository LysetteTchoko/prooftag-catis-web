import { company } from "@/constants/company";
import { siteConfig } from "@/constants/site";
import { getLocalizedString } from "@/lib/i18n";
import type { Locale } from "@/constants/locales";

export function createStructuredData(locale: Locale) {
  const logoUrl = new URL(
    "/images/brand/prooftag-catis-logo-classic.jpg",
    siteConfig.url
  ).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: "PROOFTAG CATIS",
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        email: company.email,
        telephone: company.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address,
          addressLocality: "Douala",
          addressCountry: "CM",
        },
        description: getLocalizedString(company.description, locale),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: locale,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };
}
