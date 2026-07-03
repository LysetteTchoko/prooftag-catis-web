export const mainNavigation = [
  {
    label: {
      fr: "Entreprise",
      en: "Company",
    },
    href: "/entreprise",
  },
  {
    label: {
      fr: "Expertises",
      en: "Expertise",
    },
    href: "/expertises",
  },
  {
    label: {
      fr: "Solutions",
      en: "Solutions",
    },
    href: "/solutions",
  },
  {
    label: {
      fr: "Secteurs",
      en: "Sectors",
    },
    href: "/secteurs",
  },
  {
    label: {
      fr: "Actualités",
      en: "News",
    },
    href: "/actualites",
  },
  {
    label: {
      fr: "Contact",
      en: "Contact",
    },
    href: "/contact",
  },
] as const;

export const footerNavigation = {
  company: [
    {
      label: {
        fr: "À propos",
        en: "About",
      },
      href: "/entreprise",
    },
    {
      label: {
        fr: "Carrière",
        en: "Careers",
      },
      href: "/carriere",
    },
    {
      label: {
        fr: "Actualités",
        en: "News",
      },
      href: "/actualites",
    },
  ],
  expertise: [
    {
      label: {
        fr: "Sécurité documentaire",
        en: "Document security",
      },
      href: "/expertises/securite-documentaire",
    },
    {
      label: {
        fr: "Sécurité routière",
        en: "Road safety",
      },
      href: "/expertises/securite-routiere",
    },
    {
      label: {
        fr: "Analyse de données",
        en: "Data analysis",
      },
      href: "/expertises/analyse-donnees",
    },
  ],
  solutions: [
    {
      label: {
        fr: "Certidocs CT",
        en: "Certidocs CT",
      },
      href: "/solutions/certidocs-ct",
    },
    {
      label: {
        fr: "CT-VERIF",
        en: "CT-VERIF",
      },
      href: "/solutions/ct-verif",
    },
    {
      label: {
        fr: "DOSER",
        en: "DOSER",
      },
      href: "/solutions/doser",
    },
  ],
} as const;