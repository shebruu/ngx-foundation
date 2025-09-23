import { Component } from '@angular/core';
import { CarFiltersComponent } from './components/car-filters/car-filters';




@Component({
  selector: 'app-cars',
  imports: [CarFiltersComponent ],
  templateUrl: './cars.html',
  styleUrl: './cars.scss'
})
export class Cars {

}






