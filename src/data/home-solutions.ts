export const homeSolutionsContent = {
  eyebrow: {
    fr: "Nos solutions",
    en: "Our solutions",
  },
  title: {
    fr: "Trois solutions complémentaires.",
    en: "Three complementary solutions.",
  },
  description: {
    fr: "Une offre lisible pour le contrôle technique, la vérification numérique et l’intelligence des données routières.",
    en: "A clear offer for vehicle inspection, digital verification and road data intelligence.",
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
      fr: "Solution centrale pour structurer le contrôle technique, produire les preuves et sécuriser les documents délivrés.",
      en: "Core solution for structuring vehicle inspection, producing evidence and securing issued documents.",
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
      fr: "Service de vérification rapide permettant aux acteurs autorisés de contrôler une information fiable.",
      en: "Fast verification service enabling authorized actors to check reliable information.",
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
      fr: "Plateforme d’observation et d’analyse pour transformer les données de sécurité routière en décisions utiles.",
      en: "Observation and analytics platform turning road safety data into useful decisions.",
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
