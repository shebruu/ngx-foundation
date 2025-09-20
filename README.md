# ngx-foundation - **Angular 17+** 

## 📋 Description
Il inclut un système de composants réutilisables, des styles globaux optimisés

## 📦 Installation
### Prérequis
Assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [Angular CLI](https://angular.io/cli) (version 17 ou supérieure)


1. **Installer les dépendances**

   ```bash
   npm install
   ```
2. **Lancer le serveur de développement**

   ```bash
   ng serve
   ```

## 🌿 Branches

- **`master`** - Branche principale 

## Structure du projet

```
ngx-foundation/
├── src/
│   ├── app/
│   │   ├── features/
│   │   │   └── home/                 # Page d'accueil
│   │   ├── shared
│   │   │   ├── components/
│   │   │   │   └── page-title/       # Composant titre réutilisable
│   │   │   └── enums/
│   │   │       └── title-style.enum.ts  # Enum pour alignements
│   │   └── app.config.ts
│   ├── styles.scss                   # Styles globaux et variables CSS
│   └── index.html
├── angular.json
├── package.json
└── README.md
```



````bash
```bash
# Développement
ng serve                    # Serveur de dev avec hot reload
ng build                    # Build de production
ng test                     # Tests unitaires
ng lint                     # Vérification du code

# Génération de composants
ng generate component mon-composant
ng generate service mon-service
````


## 📚 Ressources utiles
- [Documentation Angular](https://angular.io/docs)
- [Guide TypeScript](https://www.typescriptlang.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Angular CLI](https://angular.io/cli)
---


