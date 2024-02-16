// Définition de l'interface HousingLocation
export interface HousingLocation {
    id: number; // Identifiant numérique unique pour la localisation du logement
    name: string; // Nom du logement
    city: string; // Ville où se trouve le logement
    state: string; // État ou région où se trouve le logement
    photo: string; // URL de la photo du logement
    availableUnits: number; // Nombre d'unités de logement disponibles
    wifi: boolean; // Indique si le logement propose une connexion Wi-Fi (true/false)
    laundry: boolean; // Indique si le logement propose une buanderie (true/false)
  }
  