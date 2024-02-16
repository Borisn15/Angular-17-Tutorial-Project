import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',  // Component selector used in templates
  standalone: true,     // Indicates whether the component is standalone (custom property, ensure its purpose)
  imports: [CommonModule, HousingLocationComponent],  // Angular modules and components being imported

  template:
    `
   <!-- Search Section -->
   <section>
    <form>
      <!-- Input for filtering by city -->
      <input  type="text" placeholder="Filter by city" #filter (keyup)="filterResults(filter.value)" >
      <!-- Button to trigger the search -->
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>

  <!-- Results Section -->
  <section class="results">
    <!-- Displaying housing locations using app-housing-location component -->
    <app-housing-location *ngFor="let housingLocation of filteredLocationList"
   [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,

  // Styles for this component
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Base URL for images
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  // Array to store all housing locations
  housingLocationList: HousingLocation[] = [];

  // Service for fetching housing data
  housingService: HousingService = inject(HousingService);

  // Array to store filtered housing locations
  filteredLocationList: HousingLocation[] = [];

  // Constructor to initialize the component
  constructor() {
    // Fetching all housing locations using the housing service
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      // Assigning the fetched data to the component properties
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  // Method to filter housing locations based on the input text
  filterResults(text: string) {
    console.log('Form submitted!', text);
    // If the input text is empty, display all housing locations
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    // Filter housing locations based on the input text
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
