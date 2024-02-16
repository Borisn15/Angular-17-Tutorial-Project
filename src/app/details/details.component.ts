import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <article>
     <!-- Displaying the exterior photo of the housing location -->
     <img class="listing-photo" [src]="housingLocation?.photo" alt="Exterior photo of {{housingLocation?.name}}"/>
     
     <!-- Displaying details about the housing location -->
     <section class="listing-description">
     <h2 class="listing-heading">{{housingLocation?.name}}</h2>
     <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
     </section>
     
     <!-- Displaying features of the housing location -->
     <section class="listing-features">
     <h2 class="section-heading">About this housing location</h2>
     <ul>
     <li>Units available: {{housingLocation?.availableUnits}}</li>
     <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
     <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
     </ul>
     </section>
     
     <!-- Applying to live at this housing location -->
     <section class="listing-apply">
     <h2 class="section-heading">Apply now to live here</h2>
     <form [formGroup]="applyForm" (submit)="submitApplication()">
     <!-- Input fields for first name, last name, and email -->
     <label for="first-name">First Name</label>
     <input id="first-name" type="text" formControlName="firstName">

     <label for="last-name">Last Name</label>
     <input id="last-name" type="text" formControlName="lastName">

     <label for="email">Email</label>
     <input id="email" type="email" formControlName="email">
     
     <!-- Submit button to apply -->
     <button type="submit" class="primary">Apply now</button>
     </form>
     </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  
  // Injecting ActivatedRoute and HousingService
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  
  // Storing the selected housing location and application form
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    // Extracting the housing location ID from the route parameters and parsing it as an integer
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);

    // Using the HousingService to asynchronously retrieve details of the housing location by its ID
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
        // Assigning the retrieved housing location details to the component property
        this.housingLocation = housingLocation;
    });
}


  // Handling the submission of the application form
  submitApplication() {
    // Calling the submitApplication method from the service
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
