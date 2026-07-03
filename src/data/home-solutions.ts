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
    fr: "PROOFTAG CATIS développe des solutions adaptées aux environnements sensibles, avec une attention particulière portée à la fiabilité, à la sécurité et à la traçabilité.",
    en: "PROOFTAG CATIS develops solutions for sensitive environments, with a strong focus on reliability, security and traceability.",
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
      fr: "Solution dédiée à la sécurisation, à la vérification et à la traçabilité des opérations liées au contrôle technique.",
      en: "A solution dedicated to securing, verifying and tracing operations related to technical vehicle inspection.",
    },
    points: [
      {
        fr: "Documents sécurisés",
        en: "Secured documents",
      },
      {
        fr: "Vérification par QR Code",
        en: "QR Code verification",
      },
      {
        fr: "Traçabilité des opérations",
        en: "Operation traceability",
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
      fr: "Solution orientée suivi, structuration et exploitation des données pour améliorer la visibilité opérationnelle.",
      en: "A solution focused on monitoring, structuring and using data to improve operational visibility.",
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