
import { Injectable, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";

export interface CarFilters {
  model: string;
  brand: string;
  minYear: number | null;
  maxYear: number | null;
  minHp: number | null;
  maxHp: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class CarFilterFormFactory {
  private fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  public createForm(data?: Partial<CarFilters>) {
    return this.fb.group({
      // règles de validation
      model: this.fb.control(data?.model || '', [Validators.required, Validators.minLength(3)]), 
      brand: this.fb.control(data?.brand || '', [Validators.required, Validators.minLength(3)]),
      minYear: this.fb.control(data?.minYear || null, [Validators.required]),
      maxYear: this.fb.control(data?.maxYear || null, [Validators.required]),
      minHp: this.fb.control(data?.minHp || null, [Validators.required]),
      maxHp: this.fb.control(data?.maxHp || null, [Validators.required]),
    });
  }
}