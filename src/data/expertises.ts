export const expertises = [
  {
    slug: "securite-documentaire",
    title: "Sécurité documentaire",
    href: "/expertises/securite-documentaire",
    icon: "security",
    featured: true,
    description:
      "Concevoir des mécanismes permettant de protéger, authentifier et vérifier les documents sensibles.",
    points: [
      "Protection contre la fraude",
      "Authentification des documents",
      "Vérification rapide des informations",
    ],
    details:
      "La sécurité documentaire permet de renforcer la confiance autour des documents importants, en limitant les risques de falsification et en facilitant leur vérification.",
  },
  {
    slug: "securite-routiere",
    title: "Sécurité routière",
    href: "/expertises/securite-routiere",
    icon: "road",
    featured: false,
    description:
      "Accompagner la fiabilisation des opérations liées au contrôle technique et à la conformité.",
    points: [
      "Processus de contrôle plus fiables",
      "Meilleur suivi des opérations",
      "Renforcement de la confiance",
    ],
    details:
      "Cette expertise s’applique notamment aux processus liés au contrôle technique, à la conformité et à la fiabilité des informations associées aux véhicules.",
  },
  {
    slug: "verification-numerique",
    title: "Vérification numérique",
    href: "/expertises/verification-numerique",
    icon: "verification",
    featured: false,
    description:
      "Faciliter la vérification d’une information, d’un document ou d’une opération grâce aux outils numériques.",
    points: [
      "QR Code",
      "Accès rapide aux données",
      "Confirmation de validité",
    ],
    details:
      "La vérification numérique permet aux acteurs autorisés de confirmer plus rapidement la validité d’une information ou d’un document.",
  },
  {
    slug: "analyse-donnees",
    title: "Analyse de données",
    href: "/expertises/analyse-donnees",
    icon: "data",
    featured: false,
    description:
      "Structurer les données opérationnelles pour améliorer le suivi, le reporting et la prise de décision.",
    points: [
      "Données structurées",
      "Reporting",
      "Aide à la décision",
    ],
    details:
      "L’analyse de données aide à transformer les informations collectées en indicateurs utiles pour le pilotage, le suivi et la prise de décision.",
  },
  {
    slug: "support-accompagnement",
    title: "Support & accompagnement",
    href: "/expertises/support-accompagnement",
    icon: "support",
    featured: false,
    description:
      "Assurer un accompagnement technique et opérationnel pour garantir une utilisation fiable des solutions.",
    points: [
      "Assistance technique",
      "Accompagnement utilisateur",
      "Suivi opérationnel",
    ],
    details:
      "L’accompagnement permet de garantir une meilleure adoption des solutions et un suivi plus fiable dans les environnements opérationnels.",
  },
] as const;

export const homeExpertises = expertises;

export type Expertise = (typeof expertises)[number];

export function getExpertiseBySlug(slug: string) {
  return expertises.find((expertise) => expertise.slug === slug);
}