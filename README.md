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
