export const homeProcessContent = {
  eyebrow: {
    fr: "Notre approche",
    en: "Our approach",
  },
  title: {
    fr: "Un processus pensé pour renforcer la confiance.",
    en: "A process designed to strengthen trust.",
  },
  description: {
    fr: "De la sécurisation du document jusqu’à l’exploitation des données, chaque étape vise à rendre les opérations plus fiables, vérifiables et traçables.",
    en: "From document security to data usage, each step is designed to make operations more reliable, verifiable and traceable.",
  },
  methodLabel: {
    fr: "Méthode PROOFTAG CATIS",
    en: "PROOFTAG CATIS method",
  },
  methodDescription: {
    fr: "Cette approche permet de créer un lien clair entre les documents, les opérations, les utilisateurs autorisés et les données utiles au pilotage.",
    en: "This approach creates a clear link between documents, operations, authorized users and useful management data.",
  },
} as const;

export const homeProcessSteps = [
  {
    number: "01",
    title: {
      fr: "Sécuriser",
      en: "Secure",
    },
    icon: "secure",
    description: {
      fr: "Les documents et informations sensibles sont protégés grâce à des mécanismes d’authentification et de contrôle.",
      en: "Sensitive documents and information are protected through authentication and control mechanisms.",
    },
  },
  {
    number: "02",
    title: {
      fr: "Vérifier",
      en: "Verify",
    },
    icon: "verify",
    description: {
      fr: "Les acteurs autorisés peuvent confirmer rapidement la validité d’un document ou d’une opération.",
      en: "Authorized actors can quickly confirm the validity of a document or operation.",
    },
  },
  {
    number: "03",
    title: {
      fr: "Tracer",
      en: "Trace",
    },
    icon: "trace",
    description: {
      fr: "Les opérations importantes sont suivies afin de renforcer la transparence et la fiabilité du processus.",
      en: "Important operations are tracked to strengthen process transparency and reliability.",
    },
  },
  {
    number: "04",
    title: {
      fr: "Exploiter",
      en: "Use data",
    },
    icon: "report",
    description: {
      fr: "Les données structurées permettent d’améliorer le reporting, le suivi et la prise de décision.",
      en: "Structured data helps improve reporting, monitoring and decision-making.",
    },
  },
] as const;