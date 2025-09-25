import { Component, ViewChild } from '@angular/core';
import { CarFiltersComponent } from './components/car-filters/car-filters';
import { CarFilters as CarFiltersForm } from './form/interfaces/carfilters.interface';

@Component({
  selector: 'app-cars',
  imports: [CarFiltersComponent],
  templateUrl: './cars.html',
  styleUrl: './cars.scss'
})
export class Cars {
  
  //  Accès direct au composant enfant
  @ViewChild(CarFiltersComponent) carFiltersComponent!: CarFiltersComponent;
  
  // Méthode appelée quand le composant enfant émet des données
  onCarFiltersChanged(filters: CarFiltersForm) {
    console.log("DONNÉES REÇUES:", filters);
    console.log("Model:", filters.model);
    console.log("Brand:", filters.brand);
    console.log("Year range:", filters.minYear, "-", filters.maxYear);
    console.log("HP range:", filters.minHp, "-", filters.maxHp);
  }

  //utilisation de ViewChild
  
  resetCarFilters() {
    console.log("Reset du formulaire depuis le parent");
    this.carFiltersComponent.carFilterForm.reset();
  }
  
  // Pré-remplissage
  fillWithToyotaFilters() {
    console.log(" Pré-remplissage avec des filtres Toyota");
    this.carFiltersComponent.carFilterForm.patchValue({
      model: 'Corolla',
      brand: 'Toyota',
      minYear: 2020,
      maxYear: 2024,
      minHp: 120,
      maxHp: 180
    });
  }
  
  // Récupérer les valeurs du form
  getCurrentFormValues() {
    const values = this.carFiltersComponent.carFilterForm.value;
    console.log("📋 Valeurs actuelles du formulaire:", values);
    return values;
  }
  
  // recherche depuis le parent
  triggerSearch() {
    console.log("🔍 Déclenchement de la recherche depuis le parent");
  
    this.carFiltersComponent.search();
  }
}






