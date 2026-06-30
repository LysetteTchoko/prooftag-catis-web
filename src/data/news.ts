export const news = [
  {
    slug: "enjeux-securite-documentaire",
    title: "Comprendre les enjeux de la sécurité documentaire",
    href: "/actualites/enjeux-securite-documentaire",
    category: "Sécurité documentaire",
    type: "Ressource",
    description:
      "Un aperçu des risques liés aux documents sensibles et des approches permettant de renforcer leur fiabilité.",
  },
  {
    slug: "verification-numerique-processus-sensibles",
    title: "Le rôle de la vérification numérique dans les processus sensibles",
    href: "/actualites/verification-numerique-processus-sensibles",
    category: "Vérification numérique",
    type: "Analyse",
    description:
      "Comment les outils numériques facilitent l’authentification rapide et la consultation d’informations fiables.",
  },
  {
    slug: "tracabilite-donnees-operations-critiques",
    title: "Traçabilité et données : mieux suivre les opérations critiques",
    href: "/actualites/tracabilite-donnees-operations-critiques",
    category: "Traçabilité",
    type: "Ressource",
    description:
      "La structuration des données permet d’améliorer le suivi, le reporting et la prise de décision.",
  },
  {
    slug: "confiance-numerique-environnements-reglementes",
    title: "Confiance numérique dans les environnements réglementés",
    href: "/actualites/confiance-numerique-environnements-reglementes",
    category: "Confiance numérique",
    type: "Perspective",
    description:
      "Pourquoi la preuve, la vérification et la traçabilité deviennent essentielles dans les organisations sensibles.",
  },
] as const;

export const homeNews = news.slice(0, 3);

export type NewsItem = (typeof news)[number];

export function getNewsBySlug(slug: string) {
  return news.find((item) => item.slug === slug);
}