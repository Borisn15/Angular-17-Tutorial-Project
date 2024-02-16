// Importation des fonctions nécessaires pour démarrer l'application Angular
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';

// Importation du composant racine de l'application
import { AppComponent } from './app/app.component';

// Importation du fournisseur de route Angular
import { provideRouter } from '@angular/router';

// Importation de la configuration des routes définie dans le fichier routes.ts
import routeConfig from './app/routes';

// Démarrage de l'application Angular avec le composant racine et la configuration des routes
bootstrapApplication(AppComponent,
    {
      // Configuration des fournisseurs de services
      providers: [
        // Fournit un support pour les tests Protractor
        provideProtractorTestingSupport(),
        // Fournit le routeur Angular avec la configuration des routes
        provideRouter(routeConfig)
      ]
    }
  )
  // Gestion des erreurs lors du démarrage de l'application
  .catch(err => console.error(err));
