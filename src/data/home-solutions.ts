export const homeSolutionsContent = {
  eyebrow: {
    fr: "Nos solutions",
    en: "Our solutions",
  },
  title: {
    fr: "Des outils numériques pour sécuriser, vérifier et tracer.",
    en: "Digital tools to secure, verify and trace.",
  },
  description: {
    fr: "PROOFTAG CATIS développe des solutions adaptées aux environnements où la fiabilité des documents, des données et des contrôles est essentielle.",
    en: "PROOFTAG CATIS develops solutions for environments where document, data and control reliability is essential.",
  },
  learnMore: {
    fr: "En savoir plus",
    en: "Learn more",
  },
} as const;

export const homeSolutionsItems = [
  {
    name: "Certidocs CT",
    href: "/solutions/certidocs-ct",
    tag: {
      fr: "Solution phare",
      en: "Flagship solution",
    },
    icon: "certidocs",
    featured: true,
    description: {
      fr: "Solution dédiée à l’interconnexion des centres, à la génération des preuves et à la vérification des documents liés au contrôle technique.",
      en: "A solution dedicated to interconnecting centers, generating evidence and verifying documents related to vehicle inspection.",
    },
    points: [
      {
        fr: "PV et vignettes sécurisés",
        en: "Secured reports and stickers",
      },
      {
        fr: "Vérification par QR Code",
        en: "QR Code verification",
      },
      {
        fr: "Traçabilité des visites",
        en: "Inspection traceability",
      },
    ],
  },
  {
    name: "CT-VERIF",
    href: "/solutions/ct-verif",
    tag: {
      fr: "Vérification",
      en: "Verification",
    },
    icon: "verif",
    featured: false,
    description: {
      fr: "Outil de vérification numérique permettant de confirmer rapidement la validité d’une information ou d’un document.",
      en: "A digital verification tool designed to quickly confirm the validity of information or documents.",
    },
    points: [
      {
        fr: "Contrôle rapide",
        en: "Fast checking",
      },
      {
        fr: "Authentification simplifiée",
        en: "Simplified authentication",
      },
      {
        fr: "Accès aux informations utiles",
        en: "Access to useful information",
      },
    ],
  },
  {
    name: "DOSER",
    href: "/solutions/doser",
    tag: {
      fr: "Données & suivi",
      en: "Data & monitoring",
    },
    icon: "doser",
    featured: false,
    description: {
      fr: "Solution orientée structuration, suivi et exploitation des données pour améliorer le pilotage opérationnel.",
      en: "A solution focused on structuring, monitoring and using data to improve operational management.",
    },
    points: [
      {
        fr: "Données structurées",
        en: "Structured data",
      },
      {
        fr: "Suivi des activités",
        en: "Activity monitoring",
      },
      {
        fr: "Aide à la décision",
        en: "Decision support",
      },
    ],
  },
] as const;
