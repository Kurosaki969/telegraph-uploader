# Téléchargeur de fichiers Telegra.ph

Cette application web React permet de simuler le téléchargement de fichiers vers Telegra.ph et d'obtenir une URL de lien. Elle est construite avec React, Tailwind CSS et Parcel.

## Fonctionnalités

* Sélection de fichiers simple.
* Simulation de téléchargement avec un indicateur de chargement.
* Affichage de l'URL de lien simulée.
* Bouton pour copier l'URL dans le presse-papiers.
* Boîte de message personnalisée pour les notifications.

## Technologies utilisées

* **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
* **Tailwind CSS** : Framework CSS utilitaire pour un stylisme rapide et réactif.
* **Parcel** : Bundler web rapide et sans configuration.
* **gh-pages** : Pour le déploiement facile sur GitHub Pages.

## Démarrage rapide (Développement local)

1.  **Clonez le dépôt :**
    ```bash
    git clone [https://github.com/Kurosaki969/telegraph-uploader.git](https://github.com/Kurosaki969/telegraph-uploader.git)
    cd telegraph-uploader
    ```
2.  **Installez les dépendances :**
    ```bash
    npm install
    ```
3.  **Démarrez l'application en mode développement :**
    ```bash
    npm start
    ```
    L'application sera disponible sur `http://localhost:1234` (ou un autre port si 1234 est déjà utilisé).

## Déploiement

### Déploiement sur GitHub Pages

1.  Assurez-vous que le champ `homepage` dans `package.json` est correctement configuré :
    `"homepage": "https://github_username.github.io/your_repo_name"`
2.  Exécutez la commande de déploiement :
    ```bash
    npm run deploy
    ```
    Cela va construire l'application et la pousser vers la branche `gh-pages` de votre dépôt. Votre application sera accessible à l'URL définie dans `homepage`.

### Déploiement sur Render

1.  Connectez-vous à votre compte [Render](https://render.com/).
2.  Créez un nouveau "Static Site".
3.  Connectez votre dépôt GitHub `telegraph-uploader`.
4.  Configurez les paramètres de build :
    * **Build Command** : `npm run build`
    * **Publish Directory** : `dist`
5.  Render déploiera automatiquement votre application.

## Avertissement sur le téléchargement réel

Veuillez noter que la fonctionnalité de téléchargement vers `telegra.ph` est **simulée** dans cette version du code en raison de potentielles restrictions CORS ou de l'environnement d'exécution. Pour un téléchargement réel, vous devrez soit exécuter cette application dans un environnement local sans ces restrictions, soit utiliser un serveur proxy.
