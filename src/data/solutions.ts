export const solutions = [
  {
    slug: "certidocs-ct",
    name: "Certidocs CT",
    href: "/solutions/certidocs-ct",
    tag: {
      fr: "Solution phare",
      en: "Flagship solution",
    },
    icon: "certidocs",
    featured: true,
    headline: {
      fr: "Sécuriser et tracer les opérations liées au contrôle technique.",
      en: "Secure and trace operations related to technical vehicle inspection.",
    },
    description: {
      fr: "Certidocs CT est une solution dédiée à la sécurisation, à la vérification et à la traçabilité des opérations liées au contrôle technique automobile.",
      en: "Certidocs CT is a solution dedicated to securing, verifying and tracing operations related to technical vehicle inspection.",
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
    benefits: [
      {
        fr: "Renforcer la fiabilité des documents sensibles.",
        en: "Strengthen the reliability of sensitive documents.",
      },
      {
        fr: "Faciliter la vérification rapide des informations.",
        en: "Make information verification faster and easier.",
      },
      {
        fr: "Réduire les risques de falsification documentaire.",
        en: "Reduce the risk of document falsification.",
      },
      {
        fr: "Améliorer le suivi des opérations de contrôle technique.",
        en: "Improve the monitoring of technical inspection operations.",
      },
    ],
    useCases: [
      {
        fr: "Centres de contrôle technique",
        en: "Technical inspection centers",
      },
      {
        fr: "Documents liés au contrôle automobile",
        en: "Documents related to vehicle inspection",
      },
      {
        fr: "Processus nécessitant une preuve fiable",
        en: "Processes requiring reliable proof",
      },
    ],
  },
  {
    slug: "ct-verif",
    name: "CT-VERIF",
    href: "/solutions/ct-verif",
    tag: {
      fr: "Vérification",
      en: "Verification",
    },
    icon: "verif",
    featured: false,
    headline: {
      fr: "Vérifier rapidement la validité d’une information ou d’un document.",
      en: "Quickly verify the validity of information or documents.",
    },
    description: {
      fr: "CT-VERIF est un outil de vérification numérique permettant de confirmer rapidement la validité d’une information ou d’un document.",
      en: "CT-VERIF is a digital verification tool designed to quickly confirm the validity of information or documents.",
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
    benefits: [
      {
        fr: "Simplifier les contrôles de validité.",
        en: "Simplify validity checks.",
      },
      {
        fr: "Accélérer l’accès aux informations importantes.",
        en: "Speed up access to important information.",
      },
      {
        fr: "Renforcer la confiance entre les acteurs concernés.",
        en: "Strengthen trust between the actors involved.",
      },
      {
        fr: "Limiter les vérifications manuelles longues ou incertaines.",
        en: "Reduce long or uncertain manual checks.",
      },
    ],
    useCases: [
      {
        fr: "Contrôle documentaire",
        en: "Document checking",
      },
      {
        fr: "Vérification numérique",
        en: "Digital verification",
      },
      {
        fr: "Consultation d’informations sensibles",
        en: "Access to sensitive information",
      },
    ],
  },
  {
    slug: "doser",
    name: "DOSER",
    href: "/solutions/doser",
    tag: {
      fr: "Données & suivi",
      en: "Data & monitoring",
    },
    icon: "doser",
    featured: false,
    headline: {
      fr: "Structurer les données pour améliorer le suivi et la décision.",
      en: "Structure data to improve monitoring and decision-making.",
    },
    description: {
      fr: "DOSER est une solution orientée suivi, structuration et exploitation des données pour améliorer la visibilité opérationnelle.",
      en: "DOSER is a solution focused on monitoring, structuring and using data to improve operational visibility.",
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
    benefits: [
      {
        fr: "Centraliser les informations utiles.",
        en: "Centralize useful information.",
      },
      {
        fr: "Améliorer le reporting opérationnel.",
        en: "Improve operational reporting.",
      },
      {
        fr: "Faciliter le suivi des activités sensibles.",
        en: "Make sensitive activity monitoring easier.",
      },
      {
        fr: "Aider les responsables à prendre de meilleures décisions.",
        en: "Help decision-makers make better decisions.",
      },
    ],
    useCases: [
      {
        fr: "Reporting",
        en: "Reporting",
      },
      {
        fr: "Suivi opérationnel",
        en: "Operational monitoring",
      },
      {
        fr: "Analyse de données",
        en: "Data analysis",
      },
    ],
  },
] as const;

export const homeSolutions = solutions;

export type Solution = (typeof solutions)[number];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}