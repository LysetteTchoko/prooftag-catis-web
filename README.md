# PROOFTAG CATIS Web

Site vitrine professionnel de PROOFTAG CATIS, reconstruit avec Next.js, TypeScript, Tailwind CSS et App Router.

Le site présente l'entreprise, ses expertises, ses secteurs, ses actualités et ses solutions :

- Certidocs CT
- CT-VERIF
- DOSER

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- App Router
- Routes bilingues FR / EN via `src/proxy.ts`

## Internationalisation

Les URLs publiques sont disponibles avec préfixe de langue :

- `/fr`
- `/en`

La locale est utilisée pour :

- les contenus visibles ;
- la navigation et les breadcrumbs ;
- le footer ;
- les métadonnées SEO ;
- le `lang` HTML ;
- le sitemap et les alternates.

## Structure utile

- `src/app` : routes App Router, metadata files, sitemap, robots, manifest
- `src/components/pages` : contenus de pages
- `src/components/sections` : sections de la page d'accueil
- `src/components/layout` : navbar, footer, container, section, skip link
- `src/components/shared` : composants transverses
- `src/data` : contenus structurés bilingues
- `src/constants` : configuration globale, navigation, société, locales
- `src/lib` : helpers i18n, metadata, structured data
- `src/hooks` : hooks client

## Commandes

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run check
```

`npm run check` exécute lint, typecheck et build. C'est le contrôle qualité principal du projet.

## Formulaire de contact

Le formulaire de contact envoie les messages via l'API route `src/app/api/contact/route.ts` et Resend. Les identifiants ne doivent jamais être exposés dans le frontend.

Variables nécessaires :

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_FROM_EMAIL="PROOFTAG CATIS <contact@prooftagcatis.com>"
CONTACT_TO_EMAIL=info@prooftagcatis.com
```

À configurer :

- en local : créer `.env.local` à partir de `.env.example` ;
- sur Vercel : ajouter les trois variables dans Project Settings > Environment Variables ;
- vérifier dans Resend que l'adresse ou le domaine utilisé par `CONTACT_FROM_EMAIL` est autorisé ;
- utiliser une ou plusieurs adresses destinataires dans `CONTACT_TO_EMAIL`, séparées par des virgules si besoin.

Tests recommandés :

- soumettre un message valide depuis `/fr/contact` et `/en/contact` ;
- vérifier les champs obligatoires, l'email invalide et le message trop court ;
- vérifier le honeypot invisible `companyWebsite` ;
- vérifier le délai minimal avant soumission ;
- tester le comportement sans variables d'environnement : l'API doit retourner une erreur de configuration claire ;
- tester le comportement en cas d'échec Resend : l'API doit retourner une erreur d'envoi sans afficher de clé secrète.

Limites connues :

- la limitation anti-spam est volontairement simple et en mémoire ;
- aucune donnée de formulaire n'est stockée en base par le site ;
- l'envoi réel ne peut être validé que lorsque les variables Resend sont configurées dans l'environnement d'exécution.

## Règles de contenu

- Utiliser `Certidocs CT` pour la solution correspondante.
- Utiliser `PROOFTAG CATIS` dans les contenus visibles.
- Conserver des contenus professionnels, clairs et bilingues.

## SEO

Le projet inclut :

- metadata bilingues ;
- canonical localisé ;
- alternates FR / EN ;
- sitemap ;
- robots ;
- manifest web app ;
- JSON-LD `Organization` et `WebSite`.
