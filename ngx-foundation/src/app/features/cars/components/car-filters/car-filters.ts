// import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { createCarFilterform, CarFilters } from '../../form/carfilter.form';


@Component({
  selector: 'app-car-filters',
  imports: [ ReactiveFormsModule],
  templateUrl: './car-filters.html',
  styleUrl: './car-filters.scss'
})
export class CarFiltersComponent {
 
  private readonly fb = inject(NonNullableFormBuilder);

  public carFilterForm = createCarFilterform(this.fb);

  search() {
    console.log(this.carFilterForm.value);

    if(this.carFilterForm.valid){
      const filters = this.carFilterForm.value;
      console.log("formulaire bien valide", filters);
    } else {
      this.carFilterForm.markAllAsTouched();
      console.log("formulaire invalide");
    }
  }

  // filterByYear() {
  //   const minYear = this.carFilterForm.get('minYear')?.value;
  //   const maxYear = this.carFilterForm.get('maxYear')?.value;
    
  //   if (minYear && maxYear) {
  //     console.log(`Filtrage par année: ${minYear} - ${maxYear}`);
  //     // Logique de filtrage par année
  //   } else {
  //     console.log("Veuillez saisir les années min et max");
  //   }
  // }
}
