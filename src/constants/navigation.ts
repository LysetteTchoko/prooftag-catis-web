export const mainNavigation = [
  {
    label: {
      fr: "Entreprise",
      en: "Company",
    },
    href: "/entreprise",
    children: [
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
    ],
  },
  {
    label: {
      fr: "Solutions",
      en: "Solutions",
    },
    href: "/solutions",
    children: [
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
  },
  {
    label: {
      fr: "Expertises",
      en: "Expertise",
    },
    href: "/expertises",
    children: [
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
          fr: "Vérification numérique",
          en: "Digital verification",
        },
        href: "/expertises/verification-numerique",
      },
      {
        label: {
          fr: "Analyse de données",
          en: "Data analysis",
        },
        href: "/expertises/analyse-donnees",
      },
      {
        label: {
          fr: "Support & accompagnement",
          en: "Support & guidance",
        },
        href: "/expertises/support-accompagnement",
      },
    ],
  },
  {
    label: {
      fr: "Secteurs",
      en: "Sectors",
    },
    href: "/secteurs",
    children: [
      {
        label: {
          fr: "Administrations publiques",
          en: "Public administrations",
        },
        href: "/secteurs/administrations-publiques",
      },
      {
        label: {
          fr: "Transport & mobilité",
          en: "Transport & mobility",
        },
        href: "/secteurs/transport-mobilite",
      },
      {
        label: {
          fr: "Organisations réglementées",
          en: "Regulated organizations",
        },
        href: "/secteurs/organisations-reglementees",
      },
      {
        label: {
          fr: "Données & pilotage",
          en: "Data & management",
        },
        href: "/secteurs/donnees-pilotage",
      },
    ],
  },
  {
    label: {
      fr: "Ressources",
      en: "Resources",
    },
    href: "/actualites",
    children: [
      {
        label: {
          fr: "Ressources",
          en: "Resources",
        },
        href: "/actualites",
      },
    ],
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
        fr: "Vérification numérique",
        en: "Digital verification",
      },
      href: "/expertises/verification-numerique",
    },
    {
      label: {
        fr: "Analyse de données",
        en: "Data analysis",
      },
      href: "/expertises/analyse-donnees",
    },
    {
      label: {
        fr: "Support & accompagnement",
        en: "Support & guidance",
      },
      href: "/expertises/support-accompagnement",
    },
  ],
  sectors: [
    {
      label: {
        fr: "Administrations publiques",
        en: "Public administrations",
      },
      href: "/secteurs/administrations-publiques",
    },
    {
      label: {
        fr: "Transport & mobilité",
        en: "Transport & mobility",
      },
      href: "/secteurs/transport-mobilite",
    },
    {
      label: {
        fr: "Organisations réglementées",
        en: "Regulated organizations",
      },
      href: "/secteurs/organisations-reglementees",
    },
    {
      label: {
        fr: "Données & pilotage",
        en: "Data & management",
      },
      href: "/secteurs/donnees-pilotage",
    },
  ],
  resources: [
    {
      label: {
        fr: "Ressources",
        en: "Resources",
      },
      href: "/actualites",
    },
  ],
  contact: [
    {
      label: {
        fr: "Contact",
        en: "Contact",
      },
      href: "/contact",
    },
  ],
} as const;

export const socialNavigation = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Prooftag-Catis-100322071669817",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/ProoftagCatis",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/prooftag-catis-sa",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCxM3SHp-tolk5KEfu0Fyk-A",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/237699192919",
  },
] as const;
