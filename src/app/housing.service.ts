// Importation du décorateur Injectable depuis Angular core
import { Injectable } from '@angular/core';

// Importation du modèle HousingLocation depuis le fichier housinglocation
import { HousingLocation } from './housinglocation';

// Décorateur Injectable pour indiquer que le service peut être injecté dans d'autres composants
@Injectable({
  providedIn: 'root', // Indique que ce service est fourni au niveau de l'application
})
export class HousingService { 
  // URL de l'API pour les données des emplacements de logement
  url = 'http://localhost:3000/locations';

  // Méthode asynchrone pour obtenir tous les emplacements de logement
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    // Utilisation de l'API fetch pour récupérer les données depuis l'URL définie
    const data = await fetch(this.url);

    // Renvoie les données au format JSON ou un tableau vide si les données sont nulles
    return await data.json() ?? [];
  }

  // Méthode asynchrone pour obtenir un emplacement de logement par son ID
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    // Utilisation de l'API fetch pour récupérer les données spécifiques à un emplacement par son ID
    const data = await fetch(`${this.url}/${id}`);

    // Renvoie les données au format JSON ou un objet vide si les données sont nulles
    return await data.json() ?? {};
  }

  // Méthode pour soumettre une application de logement avec les informations du demandeur
  submitApplication(firstName: string, lastName: string, email: string) {
    // Affichage des informations de l'application dans la console
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
