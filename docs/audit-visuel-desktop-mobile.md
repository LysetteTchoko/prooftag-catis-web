# Audit visuel desktop/mobile - PROOFTAG CATIS

Date : 22 juillet 2026

Perimetre : audit local du site PROOFTAG CATIS en francais et en anglais, avec verification des pages principales sur desktop large 1440 px, laptop 1280 px, tablette 768 px et mobile 390 px.

Captures produites : `docs/audit-visuel-captures/`

Routes verifiees : toutes les routes demandees en `/fr` et `/en` ont repondu en HTTP 200 lors du controle local.

## A. Resume general

Etat global : le site est visuellement coherent, moderne et deja professionnel. La navigation, le footer, les pages de contenu et les pages solution utilisent un langage graphique commun. L'ensemble donne une impression institutionnelle serieuse.

Points forts :

- Identite claire : PROOFTAG CATIS, Certidocs CT, CT-VERIF et DOSER sont bien visibles.
- Navigation desktop propre, avec CTA Contact identifiable.
- Menu mobile lisible, structure en grandes rubriques et acces Contact conserve.
- Footer plus riche et coherent avec l'arborescence.
- Pages internes bien structurees, sans rupture majeure entre FR et EN.
- Aucun debordement critique observe sur mobile.

Points faibles majeurs :

- Le logo actuel est trop flou/pixelise, surtout dans la navbar et sur mobile.
- Les entetes de pages sont souvent trop hauts sur mobile : le contenu utile arrive tard.
- Les pages solutions detaillees, surtout Certidocs CT, CT-VERIF et DOSER, restent tres riches et donnent parfois une impression de densite avant les blocs visuels.
- Certains visuels reels apportent de la credibilite, mais quelques photos restent datees ou trop peu premium.

Niveau visuel actuel : bon. Le site peut atteindre un niveau premium avec une correction du logo, une densite mobile plus maitrisee et une meilleure priorisation des visuels metier.

## B. Problemes critiques

1. Logo insuffisamment net

Le logo PROOFTAG CATIS apparait compresse/pixelise dans la navbar. C'est le point qui penalise le plus la perception premium du site.

Correction recommandee : remplacer par une version vectorielle SVG officielle ou un PNG/WebP haute resolution, puis verifier navbar, footer et mobile.

2. Entetes trop volumineux sur mobile

Sur plusieurs pages, le fil d'Ariane, le badge, le titre, le paragraphe et le lien retour occupent presque tout le premier ecran mobile. L'utilisateur doit beaucoup defiler avant d'arriver au contenu utile.

Pages concernees : Accueil FR, Entreprise, Solutions, Certidocs CT, CT-VERIF, DOSER, Expertises, Secteurs, Ressources, Contact.

Correction recommandee : reduire les espacements verticaux mobile, ajuster les tailles de titres et compacter certains blocs d'introduction.

3. Pages solutions trop textuelles au premier affichage

Certidocs CT, CT-VERIF et DOSER sont solides sur le fond, mais les elements les plus concrets arrivent parfois trop bas. Le premier ecran doit montrer plus vite le fonctionnement ou la preuve visuelle.

Correction recommandee : rapprocher les schemas/mockups du debut de page et alleger les blocs d'introduction.

## C. Problemes moyens

- Accueil : le hero est institutionnel et coherent, mais la version FR reste plus lourde que la version EN sur mobile.
- Certidocs CT : contenu riche, mais encore dense ; la hierarchie peut etre plus progressive.
- CT-VERIF : le parcours de verification est clair, mais le visuel explicatif meriterait d'apparaitre plus tot.
- DOSER : le positionnement prudent est bon, mais la page doit montrer plus rapidement le tableau de bord conceptuel.
- Ressources : les cartes sont propres, mais les badges/categories deviennent hauts sur mobile.
- Footer mobile : complet et lisible, mais long ; il peut etre un peu plus compact.
- Entreprise : la photo institutionnelle apporte une preuve reelle, mais son rendu peut paraitre moins premium que le reste du site.

## D. Problemes mineurs

- Certains paragraphes FR sont plus longs que leurs equivalents EN et alourdissent les vues mobiles.
- Quelques cartes ont des espacements internes genereux qui ralentissent la lecture sur mobile.
- Les breadcrumbs sont corrects, mais prennent beaucoup de place sur les petites pages.
- Les pages Carriere, Mentions legales et Confidentialite sont propres, mais restent visuellement simples et peu differenciantes.
- Quelques sections utilisent des badges ou labels en majuscules qui peuvent etre reduits sur mobile.

## E. Page par page

| Page | Desktop | Mobile | Probleme identifie | Correction recommandee |
| --- | --- | --- | --- | --- |
| `/fr` Accueil | Hero clair, corporate, CTA visibles, visuel metier coherent. | Premiere vue tres haute en FR ; le visuel principal arrive bas. | Titre et paragraphe FR trop longs pour le premier ecran mobile. | Raccourcir legerement le texte FR mobile ou reduire les espacements du hero. |
| `/en` Home | Rendu plus compact que FR, bonne lecture. | Mobile plus equilibre que FR. | Legere hauteur encore importante. | Meme ajustement mobile que FR, mais moins prioritaire. |
| `/fr/entreprise` et `/en/entreprise` | Page credible, sections bien separees, image institutionnelle utile. | Header tres haut ; image et contenu arrivent tard. | Photo un peu datee et page tres verticale. | Optimiser le cadrage photo, compacter l'intro mobile. |
| `/fr/solutions` et `/en/solutions` | Grille de 3 solutions claire et professionnelle. | Cartes longues, premier contenu utile bas. | Beaucoup d'espace avant les cartes sur mobile. | Reduire hauteur du page header et densite des cartes mobile. |
| `/fr/solutions/certidocs-ct` et `/en/solutions/certidocs-ct` | Page complete, metier, bien structuree. | Tres dense ; les preuves et le schema arrivent apres une longue introduction. | Impression de page chargee malgre la richesse utile. | Compacter introduction, placer plus vite le schema des 12 points ou un visuel preuve. |
| `/fr/solutions/ct-verif` et `/en/solutions/ct-verif` | Clair, professionnel, CTA mintctv.cm visible. | Lecture correcte, mais parcours de verification trop bas. | La page explique avant de montrer. | Faire remonter le mockup/parcours et alleger le bloc de benefices. |
| `/fr/solutions/doser` et `/en/solutions/doser` | Positionnement prudent et credible. | Beaucoup de texte avant le dashboard conceptuel. | Le concept data manque de preuve visuelle immediatement. | Montrer le dashboard conceptuel plus tot, garder les promesses prudentes. |
| `/fr/expertises` et `/en/expertises` | Cartes coherentes, expertises differenciees. | Cartes lisibles mais hautes. | Densite mobile et icones/badges un peu imposants. | Reduire les espacements internes mobile. |
| Details Expertises FR | Contenus plus metier et bien cadres. | Pages lisibles, mais longues. | Certaines introductions repetent encore les termes verification/tracabilite. | Ajuster microcopy et compacter les listes. |
| `/fr/secteurs` et `/en/secteurs` | Bonne coherence, secteurs lisibles. | Cartes hautes, beaucoup d'espace. | Les secteurs restent visuellement proches. | Renforcer differenciation visuelle legere par categorie ou pictogramme. |
| Details Secteurs FR | Structure claire et institutionnelle. | Lisible, pas de debordement. | Pages longues, quelques blocs similaires. | Reduire repetitions et renforcer les exemples propres a chaque secteur. |
| `/fr/actualites` et `/en/actualites` | Rubrique Ressources coherente, cartes sobres. | Badge/categorie et zone visuelle prennent beaucoup de hauteur. | Les cartes ressources paraissent lourdes sur petit ecran. | Compacter les cartes et reduire hauteur de zone visuelle mobile. |
| `/fr/contact` et `/en/contact` | Page professionnelle, formulaire bien place sur desktop. | Formulaire trop bas apres les informations de contact. | Pour un utilisateur mobile, l'action principale demande beaucoup de defilement. | Raccourcir les blocs de coordonnees ou faire remonter le formulaire. |
| `/fr/carriere` et `/en/carriere` | Page simple et propre. | Tres lisible, mais peu riche visuellement. | Page un peu faible si elle reste dans le menu. | Ajouter un bloc court sur les profils recherches ou reduire sa presence menu si contenu non prioritaire. |
| `/fr/mentions-legales` et `/en/mentions-legales` | Structure serieuse et claire. | Lisible, sans debordement. | Page sobre, peu differenciee visuellement. | Conserver tel quel ; eventuellement compacter header mobile. |
| `/fr/confidentialite` et `/en/confidentialite` | Structure rassurante, contenu clair. | Lisible, mais header haut. | Meme densite que les autres pages secondaires. | Conserver, avec leger ajustement mobile plus tard. |
| Navbar desktop | Propre, claire, CTA visible. | Non concerne. | Logo flou. | Remplacer l'actif logo et verifier les tailles. |
| Menu mobile | Non concerne. | Menu clair, rubriques lisibles, Contact accessible. | Menu un peu haut et tres vertical. | Garder la structure, compacter legerement les espacements. |
| Footer | Tres complet, coherent avec menu. | Lisible, mais long et aere. | Footer mobile peut ralentir la navigation en bas de page. | Reduire marges et tailles de certains blocs sur mobile. |

## F. Priorite des corrections

P1 urgent :

- Remplacer le logo par un fichier net et stable.
- Compacter les entetes mobiles sur les pages principales.
- Faire remonter les visuels metier sur Certidocs CT, CT-VERIF et DOSER.
- Verifier que le premier ecran mobile de l'accueil FR montre plus vite le visuel ou une preuve concrete.

P2 important :

- Reduire la densite des cartes sur Solutions, Expertises, Secteurs et Ressources en mobile.
- Compacter le footer mobile sans perdre les liens essentiels.
- Ameliorer le traitement des photos reelles pour qu'elles renforcent le rendu premium.
- Harmoniser les longueurs FR/EN sur les paragraphes visibles en premier ecran.

P3 finition :

- Ajuster les badges en majuscules sur mobile.
- Rendre les pages secondaires un peu plus chaleureuses sans les surcharger.
- Ajouter quelques variations visuelles sobres entre secteurs.
- Optimiser les breadcrumbs sur mobile.

## G. Fichiers probablement concernes plus tard

- `public/images/brand/*`
- `src/components/layout/navbar.tsx`
- `src/components/layout/footer.tsx`
- `src/components/shared/breadcrumbs.tsx`
- `src/components/sections/home-hero.tsx`
- `src/components/pages/solution-detail-content.tsx`
- `src/components/pages/certidocs-security-flow.tsx`
- `src/components/pages/ct-verif-verification-panel.tsx`
- `src/components/pages/doser-dashboard-panel.tsx`
- `src/components/pages/expertises-page-content.tsx`
- `src/components/pages/expertise-detail-content.tsx`
- `src/components/pages/sectors-page-content.tsx`
- `src/components/pages/sector-detail-content.tsx`
- `src/components/pages/news-page-content.tsx`
- `src/components/pages/contact-page-content.tsx`
- `src/components/pages/legal-notice-page-content.tsx`
- `src/components/pages/privacy-page-content.tsx`

## Conclusion

Le site est deja solide, coherent et professionnel. Les corrections a venir doivent rester ciblees : nettoyer l'identite visuelle du logo, ameliorer la densite mobile et rendre les preuves metier visibles plus rapidement. Il n'est pas necessaire de refaire le design global.
