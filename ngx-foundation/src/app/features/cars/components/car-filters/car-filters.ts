import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CarFilterFormFactory, CarFilters } from '../../form/carfilter.form';

@Component({
  selector: 'app-car-filters',
  imports: [ReactiveFormsModule],
  templateUrl: './car-filters.html',
  styleUrl: './car-filters.scss'
})
export class CarFiltersComponent {
  private carFilterFormFactory = inject(CarFilterFormFactory);
  public carFilterForm = this.carFilterFormFactory.createForm();

  @Output() FormFilterChanged = new EventEmitter<CarFilters>();

  search() {
    if (this.carFilterForm.valid) {
      const filters = this.carFilterForm.getRawValue();
      console.log("Formulaire valide", filters);

      this.FormFilterChanged.emit(filters);
    } else {
      this.carFilterForm.markAllAsTouched();
      console.log("Formulaire invalide");
    }
  }
}

