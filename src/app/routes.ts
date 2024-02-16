// Importation de l'interface Routes depuis le module Angular router
import { Routes } from '@angular/router';

// Importation des composants HomeComponent et DetailsComponent
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

// Configuration des routes avec leurs composants associés
const routeConfig: Routes = [
    {
      // Chemin de l'URL pour la page d'accueil
      path: '',
      // Composant associé à la page d'accueil
      component: HomeComponent,
      // Titre de la page d'accueil (peut être utilisé pour le balisage HTML)
      title: 'Home page'
    },
    {
      // Chemin de l'URL pour la page de détails avec un paramètre dynamique (:id)
      path: 'details/:id',
      // Composant associé à la page de détails
      component: DetailsComponent,
      // Titre de la page de détails (peut être utilisé pour le balisage HTML)
      title: 'Home details'
    }
];

// Exportation de la configuration des routes pour une utilisation dans d'autres fichiers
export default routeConfig;
