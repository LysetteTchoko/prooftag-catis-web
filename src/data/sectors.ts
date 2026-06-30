export const sectors = [
  {
    slug: "administrations-publiques",
    title: "Administrations publiques",
    href: "/secteurs/administrations-publiques",
    icon: "administration",
    featured: true,
    description:
      "Sécurisation, vérification et suivi des documents sensibles dans des environnements institutionnels.",
    points: [
      "Documents sensibles",
      "Processus de vérification",
      "Traçabilité institutionnelle",
    ],
    details:
      "Les administrations publiques manipulent des informations et documents sensibles qui nécessitent fiabilité, transparence et contrôle. Les solutions PROOFTAG CATIS peuvent contribuer à renforcer la confiance dans ces processus.",
  },
  {
    slug: "transport-mobilite",
    title: "Transport & mobilité",
    href: "/secteurs/transport-mobilite",
    icon: "mobility",
    featured: false,
    description:
      "Fiabilisation des processus liés au contrôle technique, à la conformité et à la circulation des informations.",
    points: [
      "Contrôle technique",
      "Conformité",
      "Suivi des opérations",
    ],
    details:
      "Le secteur du transport et de la mobilité exige des processus fiables, notamment lorsqu’il s’agit de contrôle technique, de conformité et de documents liés aux véhicules.",
  },
  {
    slug: "organisations-reglementees",
    title: "Organisations réglementées",
    href: "/secteurs/organisations-reglementees",
    icon: "regulated",
    featured: false,
    description:
      "Accompagnement des structures ayant besoin de preuves, de contrôles et de traçabilité documentaire.",
    points: [
      "Preuves documentaires",
      "Contrôles internes",
      "Fiabilité des informations",
    ],
    details:
      "Certaines organisations évoluent dans des contextes où la preuve, la conformité et la traçabilité sont essentielles. Les outils numériques peuvent aider à mieux structurer et sécuriser ces processus.",
  },
  {
    slug: "donnees-pilotage",
    title: "Données & pilotage",
    href: "/secteurs/donnees-pilotage",
    icon: "data",
    featured: false,
    description:
      "Structuration des informations utiles pour le reporting, le suivi opérationnel et la prise de décision.",
    points: [
      "Données structurées",
      "Reporting",
      "Aide à la décision",
    ],
    details:
      "La donnée devient un levier important lorsqu’elle est structurée, fiable et exploitable. Elle permet d’améliorer le suivi, le pilotage et la prise de décision.",
  },
] as const;

export const homeSectors = sectors;

export type Sector = (typeof sectors)[number];

export function getSectorBySlug(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}