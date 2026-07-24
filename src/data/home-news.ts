export const homeNewsContent = {
  eyebrow: {
    fr: "Ressources",
    en: "Resources",
  },
  title: {
    fr: "Approfondir les sujets de sécurité, vérification et traçabilité.",
    en: "Explore security, verification and traceability topics.",
  },
  description: {
    fr: "Des ressources éditoriales pour mieux comprendre les enjeux liés aux documents sensibles, au contrôle terrain et aux données.",
    en: "Editorial resources to better understand challenges related to sensitive documents, field checks and data.",
  },
  allNews: {
    fr: "Toutes les ressources",
    en: "All resources",
  },
  readMore: {
    fr: "Lire la ressource",
    en: "Read resource",
  },
} as const;

export const homeNewsItems = [
  {
    title: {
      fr: "Comprendre les enjeux de la sécurité documentaire",
      en: "Understanding document security challenges",
    },
    category: {
      fr: "Sécurité documentaire",
      en: "Document security",
    },
    type: {
      fr: "Ressource",
      en: "Resource",
    },
    href: "/actualites/enjeux-securite-documentaire",
    description: {
      fr: "Un aperçu des risques liés aux documents sensibles et des approches permettant de renforcer leur fiabilité.",
      en: "An overview of the risks related to sensitive documents and the approaches used to strengthen their reliability.",
    },
  },
  {
    title: {
      fr: "Le rôle de la vérification numérique dans les processus sensibles",
      en: "The role of digital verification in sensitive processes",
    },
    category: {
      fr: "Vérification terrain",
      en: "Field verification",
    },
    type: {
      fr: "Analyse",
      en: "Insight",
    },
    href: "/actualites/verification-numerique-processus-sensibles",
    description: {
      fr: "Comment les outils numériques facilitent l’authentification rapide et la consultation d’informations fiables.",
      en: "How digital tools make fast authentication and access to reliable information easier.",
    },
  },
  {
    title: {
      fr: "Traçabilité et données : mieux suivre les opérations critiques",
      en: "Traceability and data: better monitoring critical operations",
    },
    category: {
      fr: "Données & pilotage",
      en: "Data & management",
    },
    type: {
      fr: "Repère",
      en: "Guide",
    },
    href: "/actualites/tracabilite-donnees-operations-critiques",
    description: {
      fr: "La structuration des données permet d’améliorer le suivi, le reporting et la prise de décision.",
      en: "Structured data helps improve monitoring, reporting and decision-making.",
    },
  },
] as const;
