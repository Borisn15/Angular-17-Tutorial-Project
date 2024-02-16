// Importation des modules nécessaires depuis Angular
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; // Import du composant HomeComponent
import { RouterModule } from '@angular/router';

// Définition du composant AppComponent
@Component({
  // Sélecteur du composant, utilisé dans l'application Angular
  selector: 'app-root',
  standalone: true,
  // La propriété standalone n'est pas une propriété standard d'Angular,
  // assurez-vous de son utilité (ce commentaire suggère que la propriété "standalone"
  // peut ne pas être standard et pourrait nécessiter une vérification)

  // Importation des modules nécessaires au composant
  imports:[
    HomeComponent, // Import du composant HomeComponent
    RouterModule, // Import du module RouterModule pour la gestion des routes
    // (l'importation de composants n'est généralement pas faite dans le décorateur @Component)
  ],

  // Template HTML du composant
  template: `
    <main>
      <!-- Liens de navigation vers la page d'accueil -->
      <a [routerLink]="['/']">
        <header class="brand-name">
          <!-- Logo de l'application -->
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
      </a>
      
      <!-- Emplacement pour afficher les composants de la route actuelle -->
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  
  // Chemin vers le fichier CSS pour les styles spécifiques à ce composant
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Propriété de titre de l'application
  title = 'homes';
}
