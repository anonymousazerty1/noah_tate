# Déploiement — Anthony De Baere Portfolio

## 1. Installer Node.js (si pas encore fait)

```bash
# Option A — Homebrew (recommandé sur Mac)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node

# Option B — nvm (gestionnaire de versions)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20
nvm use 20
```

---

## 2. Installer les dépendances & lancer en local

```bash
cd ~/portfolio
npm install
npm run dev
# → http://localhost:3000
```

---

## 3. Personnaliser le contenu

### Images
| Fichier | Usage |
|---------|-------|
| `public/hero.jpg` | Photo principale (page Home) |
| `public/bio.jpg` | Portrait (page Bio) |
| `public/work/projet-1.jpg` … | Visuels des projets (page Work) |

**Recommandations :** JPG, ≈ 2400px de large, < 500 Ko (optimisé avec [Squoosh](https://squoosh.app/)).

### Spotify
Dans `app/links/page.tsx`, remplace l'URI :
```ts
const SPOTIFY_URI = 'playlist/37i9dQZF1DXcBWIGoYBM5M'
// → 'artist/TON_ARTIST_ID'
// → 'album/TON_ALBUM_ID'
// → 'track/TON_TRACK_ID'
```
L'ID se trouve dans l'URL Spotify de ton contenu.

### Liens sociaux
Édite le tableau `links` dans `app/links/page.tsx`.

### Projets Work
Édite le tableau `projects` dans `app/work/page.tsx`.

### Vidéos
Édite le tableau `videos` dans `app/video/page.tsx` (YouTube ou Vimeo).

### Biographie
Édite le texte directement dans `app/bio/page.tsx`.

---

## 4. Déployer sur Vercel

### Option A — Via GitHub (recommandé)

```bash
# 1. Créer un repo GitHub (github.com/new)
cd ~/portfolio
git init
git add .
git commit -m "init portfolio"
git remote add origin https://github.com/TON_USERNAME/portfolio.git
git push -u origin main
```

2. Aller sur [vercel.com](https://vercel.com) → **Add New Project** → importer le repo  
3. Vercel détecte Next.js automatiquement → **Deploy**  
4. Chaque `git push` redéploie automatiquement ✓

### Option B — Via Vercel CLI

```bash
npm i -g vercel
cd ~/portfolio
vercel
# Suit les prompts → déploiement immédiat
```

---

## 5. Domaine personnalisé

Dans le dashboard Vercel → **Settings → Domains** → ajouter ton domaine.

---

## Structure du projet

```
portfolio/
├── app/
│   ├── layout.tsx          ← Layout global (nav + cursor)
│   ├── globals.css         ← Tous les styles
│   ├── page.tsx            ← Home / Hero
│   ├── work/page.tsx       ← Projets
│   ├── video/page.tsx      ← Vidéos YouTube / Vimeo
│   ├── bio/page.tsx        ← Biographie
│   └── links/page.tsx      ← Liens + Spotify
├── components/
│   ├── Cursor.tsx          ← Curseur custom
│   ├── Nav.tsx             ← Navigation fixe
│   └── SpotifyPlayer.tsx   ← Embed Spotify
├── public/                 ← Images statiques
├── vercel.json             ← Headers HTTP
└── package.json
```
