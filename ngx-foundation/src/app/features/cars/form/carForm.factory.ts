//2nd method to create a Reactive Form With angular
import { inject, Injectable } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { CarFilters } from './interfaces/carfilters.interface';
import { Car } from './interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarFormFactory {
  private fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  public createFilterForm(data?: Partial<CarFilters>) {
    return this.fb.group({
      model: this.fb.control(data?.model, [Validators.minLength(2)]),
      brand: this.fb.control(data?.brand, [Validators.minLength(2)]),
      minHp: this.fb.control(data?.minHp, [Validators.min(0)]),
      maxHp: this.fb.control(data?.maxHp, [Validators.max(999)]),
      minYear: this.fb.control(data?.minYear, [Validators.min(1800)]),
      maxYear: this.fb.control(data?.maxYear, [Validators.max(new Date().getFullYear())]),
    })
  }
  
  public createForm(data?: Partial<Car>) {
    return this.fb.group({
      model: this.fb.control(data?.model, [Validators.required, Validators.minLength(2)]),
      brand: this.fb.control(data?.brand, [Validators.required, Validators.minLength(2)]),
      year: this.fb.control(data?.year, [Validators.required, Validators.min(1800)]),
      hp: this.fb.control(data?.hp, [Validators.required, Validators.min(0)]),
    })
  }
}