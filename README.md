# 🎬 Application Studio Ghibli

Cette application web permet de consulter, trier, rechercher et gérer ses films préférés du **Studio Ghibli**. Elle a été développée dans le cadre du **Titre Professionnel CDA (Concepteur Développeur d'Applications)**.

## Technologies utilisées

- [React](https://reactjs.org/) + Vite
- [React Router DOM](https://reactrouter.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) pour la gestion d’état globale
- [LocalStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage) pour la persistance des favoris
- CSS fourni (non modifié)

## Objectifs pédagogiques

- Utiliser un **framework moderne** (React)
- Structurer une application avec une **navigation multi-pages**
- Mettre en place une **gestion d’état globale** avec persistance
- Intégrer une API publique (https://ghibliapi.vercel.app/films)
- Appliquer les compétences du **référentiel CDA** : interface utilisateur, composants métier, persistance, navigation, accessibilité et sécurité.

## Installation et lancement

### 1. Cloner le dépôt

```bash
git clone https://github.com/komiifo/ghibli-app.git
cd ghibli-app
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer l’application

```bash
npm run dev
```

## Fonctionnalités

### Affichage des films

- Cartes avec image, titre, réalisateur, date, note
- Détail complet via URL dynamique (`/film/:id`)

### Recherche

- Filtrage en temps réel par titre (insensible à la casse)

### Tri

- Par titre (A-Z)
- Par date de sortie (chronologique)
- Par score (décroissant)

### Favoris

- Ajouter/enlever des films
- Persistance via `localStorage`
- Accès depuis la page "Favoris"

### Navigation

- `Home` : liste des films
- `Film` : page détail
- `Favoris` : films favoris

## Structure du projet

```
src/
├── components/         # Composants réutilisables (Header, Navbar, FilmCard...)
├── pages/              # Pages (Home, Détail, Favoris)
├── store/              # Zustand store.js
├── App.jsx             # Configuration du router
└── index.css           # Feuille de style fournie
```

## API utilisée

- Endpoint : https://ghibliapi.vercel.app/films
- Format : JSON
- Aucune authentification requise

## Compétences CDA mises en œuvre

- Installer et configurer son environnement de travail
- Développer des interfaces utilisateur
- Développer des composants métier
- Gérer la persistance locale
- Utiliser une API REST
- Appliquer les principes de navigation SPA
- Organiser le code de manière modulaire
- Respecter la charte graphique, l’accessibilité et les bonnes pratiques de développement sécurisé

## Auteur

Projet réalisé par Jhonatan GALAIS

Dans le cadre du **Titre Professionnel CDA (Concepteur Développeur d’Applications)** – session 2025.
