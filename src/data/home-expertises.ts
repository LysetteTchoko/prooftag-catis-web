export const homeExpertisesContent = {
  eyebrow: {
    fr: "Nos expertises",
    en: "Our expertise",
  },
  title: {
    fr: "Une expertise au service de la sécurité, de la confiance et de la performance.",
    en: "Expertise serving security, trust and performance.",
  },
  description: {
    fr: "PROOFTAG CATIS combine sécurité documentaire, vérification numérique, analyse de données et accompagnement pour fiabiliser les processus métier.",
    en: "PROOFTAG CATIS combines document security, digital verification, data analysis and guidance to make business processes more reliable.",
  },
  featuredBadge: {
    fr: "Expertise clé",
    en: "Key expertise",
  },
} as const;

export const homeExpertisesItems = [
  {
    title: {
      fr: "Sécurité documentaire",
      en: "Document security",
    },
    description: {
      fr: "Concevoir des mécanismes permettant de protéger, authentifier et vérifier les documents sensibles.",
      en: "Design mechanisms to protect, authenticate and verify sensitive documents.",
    },
    points: {
      fr: ["Protection", "Authentification", "Vérification"],
      en: ["Protection", "Authentication", "Verification"],
    },
    icon: "security",
    featured: true,
  },
  {
    title: {
      fr: "Sécurité routière",
      en: "Road safety",
    },
    description: {
      fr: "Accompagner la fiabilisation des visites techniques, des preuves produites et de la conformité.",
      en: "Support the reliability of vehicle inspections, generated evidence and compliance.",
    },
    points: {
      fr: ["Processus fiables", "Suivi opérationnel", "Confiance"],
      en: ["Reliable processes", "Operational monitoring", "Trust"],
    },
    icon: "road",
    featured: false,
  },
  {
    title: {
      fr: "Vérification numérique",
      en: "Digital verification",
    },
    description: {
      fr: "Faciliter la vérification d’une information, d’un document ou d’une opération grâce aux outils numériques.",
      en: "Make it easier to verify information, a document or an operation through digital tools.",
    },
    points: {
      fr: ["QR Code", "Accès rapide aux données", "Confirmation de validité"],
      en: ["QR Code", "Fast data access", "Validity confirmation"],
    },
    icon: "verification",
    featured: false,
  },
  {
    title: {
      fr: "Analyse de données",
      en: "Data analysis",
    },
    description: {
      fr: "Structurer les données opérationnelles pour améliorer le suivi, le reporting et la prise de décision.",
      en: "Structure operational data to improve monitoring, reporting and decision-making.",
    },
    points: {
      fr: ["Données structurées", "Reporting", "Aide à la décision"],
      en: ["Structured data", "Reporting", "Decision support"],
    },
    icon: "data",
    featured: false,
  },
  {
    title: {
      fr: "Support & accompagnement",
      en: "Support & guidance",
    },
    description: {
      fr: "Assurer un accompagnement technique et opérationnel pour garantir une utilisation fiable des solutions.",
      en: "Provide technical and operational guidance to ensure reliable use of the solutions.",
    },
    points: {
      fr: ["Assistance technique", "Accompagnement utilisateur", "Suivi opérationnel"],
      en: ["Technical support", "User guidance", "Operational follow-up"],
    },
    icon: "support",
    featured: false,
  },
] as const;
