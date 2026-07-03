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
    fr: "PROOFTAG-CATIS combine sécurité documentaire, outils numériques, vérification et analyse de données pour répondre aux besoins des environnements sensibles.",
    en: "PROOFTAG-CATIS combines document security, digital tools, verification and data analysis to meet the needs of sensitive environments.",
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
    icon: "security",
    featured: true,
    description: {
      fr: "Concevoir des mécanismes permettant de protéger, authentifier et vérifier les documents sensibles.",
      en: "Design mechanisms to protect, authenticate and verify sensitive documents.",
    },
    points: [
      {
        fr: "Protection contre la fraude",
        en: "Fraud protection",
      },
      {
        fr: "Authentification des documents",
        en: "Document authentication",
      },
      {
        fr: "Vérification rapide des informations",
        en: "Fast information verification",
      },
    ],
  },
  {
    title: {
      fr: "Sécurité routière",
      en: "Road safety",
    },
    icon: "road",
    featured: false,
    description: {
      fr: "Accompagner la fiabilisation des opérations liées au contrôle technique et à la conformité.",
      en: "Support the reliability of operations related to technical inspection and compliance.",
    },
    points: [
      {
        fr: "Processus de contrôle plus fiables",
        en: "More reliable inspection processes",
      },
      {
        fr: "Meilleur suivi des opérations",
        en: "Better operation monitoring",
      },
      {
        fr: "Renforcement de la confiance",
        en: "Strengthened trust",
      },
    ],
  },
  {
    title: {
      fr: "Vérification numérique",
      en: "Digital verification",
    },
    icon: "verification",
    featured: false,
    description: {
      fr: "Faciliter la vérification d’une information, d’un document ou d’une opération grâce aux outils numériques.",
      en: "Make it easier to verify information, documents or operations through digital tools.",
    },
    points: [
      {
        fr: "QR Code",
        en: "QR Code",
      },
      {
        fr: "Accès rapide aux données",
        en: "Fast access to data",
      },
      {
        fr: "Confirmation de validité",
        en: "Validity confirmation",
      },
    ],
  },
  {
    title: {
      fr: "Analyse de données",
      en: "Data analysis",
    },
    icon: "data",
    featured: false,
    description: {
      fr: "Structurer les données opérationnelles pour améliorer le suivi, le reporting et la prise de décision.",
      en: "Structure operational data to improve monitoring, reporting and decision-making.",
    },
    points: [
      {
        fr: "Données structurées",
        en: "Structured data",
      },
      {
        fr: "Reporting",
        en: "Reporting",
      },
      {
        fr: "Aide à la décision",
        en: "Decision support",
      },
    ],
  },
  {
    title: {
      fr: "Support & accompagnement",
      en: "Support & guidance",
    },
    icon: "support",
    featured: false,
    description: {
      fr: "Assurer un accompagnement technique et opérationnel pour garantir une utilisation fiable des solutions.",
      en: "Provide technical and operational support to ensure reliable use of the solutions.",
    },
    points: [
      {
        fr: "Assistance technique",
        en: "Technical assistance",
      },
      {
        fr: "Accompagnement utilisateur",
        en: "User guidance",
      },
      {
        fr: "Suivi opérationnel",
        en: "Operational follow-up",
      },
    ],
  },
] as const;