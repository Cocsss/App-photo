# Mettre Montage en ligne sur GitHub Pages

Ton site Corentindeville.com n'est pas touché. On crée un dépôt séparé, avec sa
propre adresse.

## Les fichiers

Deux fichiers, à déposer **côte à côte, à la racine du dépôt** :

- `index.html` — l'app
- `sw.js` — le service worker (démarrage hors ligne)

Ne les mets pas dans un sous-dossier : `sw.js` doit être au même niveau que
`index.html`, sinon le hors ligne ne marchera pas.

## Les étapes

1. Sur github.com, clique sur **+** en haut à droite → **New repository**.
2. Nom : `montage`. Coche **Public**. Crée-le.
3. Sur la page du dépôt vide : **uploading an existing file**.
4. Glisse `index.html` et `sw.js` dans la zone. Clique **Commit changes**.
5. Onglet **Settings** → **Pages** dans le menu de gauche.
6. Sous *Source*, choisis **Deploy from a branch**, branche **main**, dossier
   **/ (root)**. Clique **Save**.
7. Attends une ou deux minutes. L'adresse s'affiche en haut de la page :

   `https://TON-PSEUDO.github.io/montage/`

## Installer sur l'iPhone

1. Ouvre cette adresse **dans Safari** (pas Chrome : sur iOS, seul Safari sait
   installer une app).
2. Bouton Partager (le carré avec la flèche) → **Sur l'écran d'accueil**.
3. L'icône apparaît. Ouvre-la depuis là, pas depuis Safari.

À partir de ce moment : pas de barre Safari, démarrage hors ligne, et iOS ne
fera plus le ménage dans tes montages sauvegardés.

## Pour mettre à jour l'app plus tard

Remplace `index.html` dans le dépôt (bouton crayon ou re-upload). Ouvre l'app
une fois **avec du réseau** : elle récupère la nouvelle version toute seule.

Si jamais elle reste bloquée sur l'ancienne, ouvre `sw.js` et change
`montage-v1` en `montage-v2` : ça force le renouvellement du cache.

## Si tu préfères ton propre nom de domaine

Tu peux pointer un sous-domaine, par exemple `montage.corentindeville.com`, vers
GitHub Pages. Ça n'affecte pas ton site principal. Demande-moi si tu veux les
enregistrements DNS exacts.
