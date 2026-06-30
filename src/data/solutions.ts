export const solutions = [
  {
    slug: "certidocs-ct",
    name: "Certidocs CT",
    href: "/solutions/certidocs-ct",
    tag: "Solution phare",
    icon: "certidocs",
    featured: true,
    headline:
      "Sécuriser et tracer les opérations liées au contrôle technique.",
    description:
      "Certidocs CT est une solution dédiée à la sécurisation, à la vérification et à la traçabilité des opérations liées au contrôle technique automobile.",
    points: [
      "Documents sécurisés",
      "Vérification par QR Code",
      "Traçabilité des opérations",
    ],
    benefits: [
      "Renforcer la fiabilité des documents sensibles.",
      "Faciliter la vérification rapide des informations.",
      "Réduire les risques de falsification documentaire.",
      "Améliorer le suivi des opérations de contrôle technique.",
    ],
    useCases: [
      "Centres de contrôle technique",
      "Documents liés au contrôle automobile",
      "Processus nécessitant une preuve fiable",
    ],
  },
  {
    slug: "ct-verif",
    name: "CT-VERIF",
    href: "/solutions/ct-verif",
    tag: "Vérification",
    icon: "verif",
    featured: false,
    headline:
      "Vérifier rapidement la validité d’une information ou d’un document.",
    description:
      "CT-VERIF est un outil de vérification numérique permettant de confirmer rapidement la validité d’une information ou d’un document.",
    points: [
      "Contrôle rapide",
      "Authentification simplifiée",
      "Accès aux informations utiles",
    ],
    benefits: [
      "Simplifier les contrôles de validité.",
      "Accélérer l’accès aux informations importantes.",
      "Renforcer la confiance entre les acteurs concernés.",
      "Limiter les vérifications manuelles longues ou incertaines.",
    ],
    useCases: [
      "Contrôle documentaire",
      "Vérification numérique",
      "Consultation d’informations sensibles",
    ],
  },
  {
    slug: "doser",
    name: "DOSER",
    href: "/solutions/doser",
    tag: "Données & suivi",
    icon: "doser",
    featured: false,
    headline:
      "Structurer les données pour améliorer le suivi et la décision.",
    description:
      "DOSER est une solution orientée suivi, structuration et exploitation des données pour améliorer la visibilité opérationnelle.",
    points: [
      "Données structurées",
      "Suivi des activités",
      "Aide à la décision",
    ],
    benefits: [
      "Centraliser les informations utiles.",
      "Améliorer le reporting opérationnel.",
      "Faciliter le suivi des activités sensibles.",
      "Aider les responsables à prendre de meilleures décisions.",
    ],
    useCases: [
      "Reporting",
      "Suivi opérationnel",
      "Analyse de données",
    ],
  },
] as const;

export const homeSolutions = solutions;

export type Solution = (typeof solutions)[number];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}