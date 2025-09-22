// import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-filters',
  imports: [FormsModule],
  templateUrl: './car-filters.html',
  styleUrl: './car-filters.scss'
})
export class CarFilters {
  modelInput: string = '';

  search() {
    console.log('Searching for model:', this.modelInput);
  }
}
