import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  // Component selector used in HTML templates
  selector: 'app-housing-location',
  
  // Indicates that this component should be treated as a standalone component
  standalone: true,
  
  // Imports required modules for this component
  imports: [CommonModule, RouterModule],

  // HTML template for this component
  template: `
    <!-- Housing Location Section -->
    <section class="listing">
      <!-- Displaying the exterior photo of the housing location -->
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      
      <!-- Displaying the name of the housing location -->
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      
      <!-- Displaying the location (city and state) of the housing location -->
      <p class="listing-location">{{ housingLocation.city}}, {{ housingLocation.state }}</p>
      
      <!-- Link to navigate to the details page for more information -->
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,

  // Styles for this component
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  // Input property to receive the HousingLocation object from the parent component
  @Input() housingLocation!: HousingLocation;
}
