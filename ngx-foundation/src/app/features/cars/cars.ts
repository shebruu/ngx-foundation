import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CarFilters } from '../../shared/components/car-filters/car-filters';



@Component({
  selector: 'app-cars',
  imports: [ RouterLink,CarFilters ],
  templateUrl: './cars.html',
  styleUrl: './cars.scss'
})
export class Cars {

}
