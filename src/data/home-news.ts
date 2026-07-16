export const homeNewsContent = {
  eyebrow: {
    fr: "Actualités & ressources",
    en: "News & resources",
  },
  title: {
    fr: "Suivre les sujets liés à la sécurité et à la confiance numérique.",
    en: "Follow topics related to security and digital trust.",
  },
  description: {
    fr: "Cette section préparera les contenus éditoriaux du site : articles, annonces, ressources et informations utiles.",
    en: "This section will host the website’s editorial content: articles, announcements, resources and useful information.",
  },
  allNews: {
    fr: "Toutes les actualités",
    en: "All news",
  },
  readMore: {
    fr: "Lire la suite",
    en: "Read more",
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
      fr: "Vérification numérique",
      en: "Digital verification",
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
      fr: "Traçabilité",
      en: "Traceability",
    },
    href: "/actualites/tracabilite-donnees-operations-critiques",
    description: {
      fr: "La structuration des données permet d’améliorer le suivi, le reporting et la prise de décision.",
      en: "Structured data helps improve monitoring, reporting and decision-making.",
    },
  },
] as const;
