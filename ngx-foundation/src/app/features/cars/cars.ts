import { Component } from '@angular/core';

import { CarFilters } from '../../shared/components/car-filters/car-filters';



@Component({
  selector: 'app-cars',
  imports: [CarFilters ],
  templateUrl: './cars.html',
  styleUrl: './cars.scss'
})
export class Cars {

}
