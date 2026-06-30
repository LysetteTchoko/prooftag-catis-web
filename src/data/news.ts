export const news = [
  {
    slug: "enjeux-securite-documentaire",
    title: "Comprendre les enjeux de la sécurité documentaire",
    href: "/actualites/enjeux-securite-documentaire",
    category: "Sécurité documentaire",
    type: "Ressource",
    description:
      "Un aperçu des risques liés aux documents sensibles et des approches permettant de renforcer leur fiabilité.",
    content: [
      "Les documents sensibles jouent un rôle important dans de nombreux processus administratifs, techniques et organisationnels. Lorsqu’ils ne sont pas correctement protégés, ils peuvent exposer les organisations à des risques de falsification, d’erreur ou de perte de confiance.",
      "La sécurité documentaire consiste à mettre en place des mécanismes permettant de mieux protéger les informations, de faciliter leur vérification et de renforcer la fiabilité des processus associés.",
      "Pour PROOFTAG CATIS, cette approche s’inscrit dans une logique de confiance numérique : sécuriser, authentifier et rendre les informations plus faciles à contrôler.",
    ],
    takeaways: [
      "Limiter les risques de falsification documentaire.",
      "Faciliter la vérification des informations sensibles.",
      "Renforcer la confiance entre les acteurs concernés.",
    ],
  },
  {
    slug: "verification-numerique-processus-sensibles",
    title: "Le rôle de la vérification numérique dans les processus sensibles",
    href: "/actualites/verification-numerique-processus-sensibles",
    category: "Vérification numérique",
    type: "Analyse",
    description:
      "Comment les outils numériques facilitent l’authentification rapide et la consultation d’informations fiables.",
    content: [
      "Dans les processus sensibles, la capacité à vérifier rapidement une information devient essentielle. Les méthodes manuelles peuvent être lentes, difficiles à tracer ou insuffisamment fiables.",
      "La vérification numérique permet de rendre cette étape plus simple et plus accessible. Elle peut s’appuyer sur des mécanismes comme le QR Code, la consultation sécurisée ou l’accès à des informations structurées.",
      "L’objectif est de permettre aux acteurs autorisés de confirmer plus facilement la validité d’un document, d’une donnée ou d’une opération.",
    ],
    takeaways: [
      "Accélérer les contrôles de validité.",
      "Réduire les vérifications manuelles incertaines.",
      "Améliorer l’accès aux informations utiles.",
    ],
  },
  {
    slug: "tracabilite-donnees-operations-critiques",
    title: "Traçabilité et données : mieux suivre les opérations critiques",
    href: "/actualites/tracabilite-donnees-operations-critiques",
    category: "Traçabilité",
    type: "Ressource",
    description:
      "La structuration des données permet d’améliorer le suivi, le reporting et la prise de décision.",
    content: [
      "La traçabilité permet de suivre les étapes importantes d’un processus. Elle aide à comprendre ce qui a été fait, quand, par qui et dans quel contexte.",
      "Lorsqu’elle est associée à des données bien structurées, elle devient un outil puissant pour le suivi opérationnel, le reporting et la prise de décision.",
      "Pour les environnements sensibles, la traçabilité contribue à renforcer la transparence, la responsabilité et la fiabilité des opérations.",
    ],
    takeaways: [
      "Mieux suivre les opérations importantes.",
      "Structurer les données pour le reporting.",
      "Améliorer la prise de décision.",
    ],
  },
  {
    slug: "confiance-numerique-environnements-reglementes",
    title: "Confiance numérique dans les environnements réglementés",
    href: "/actualites/confiance-numerique-environnements-reglementes",
    category: "Confiance numérique",
    type: "Perspective",
    description:
      "Pourquoi la preuve, la vérification et la traçabilité deviennent essentielles dans les organisations sensibles.",
    content: [
      "Les environnements réglementés exigent des processus clairs, fiables et vérifiables. La confiance ne repose pas seulement sur une déclaration, mais sur la capacité à apporter une preuve.",
      "La confiance numérique consiste à utiliser des outils et des mécanismes qui renforcent la fiabilité des informations, la transparence des opérations et la vérification des documents.",
      "Cette approche permet aux organisations de mieux contrôler leurs processus et de limiter les zones d’incertitude.",
    ],
    takeaways: [
      "Renforcer la preuve et la vérification.",
      "Améliorer la transparence des opérations.",
      "Créer des processus plus fiables.",
    ],
  },
] as const;

export const homeNews = news.slice(0, 3);

export type NewsItem = (typeof news)[number];

export function getNewsBySlug(slug: string) {
  return news.find((item) => item.slug === slug);
}