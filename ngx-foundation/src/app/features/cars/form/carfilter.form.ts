
import { NonNullableFormBuilder, Validators } from "@angular/forms";



export interface CarFilters {


  model: string;
  brand: string;
  minYear: number | null;
  maxYear: number | null;
  minHp: number | null;
  maxHp: number | null;

}


export function createCarFilterform(fb: NonNullableFormBuilder, data?: Partial<CarFilters>) {


   return fb.group({


    model: fb.control(data?.model, [Validators.required, Validators.minLength(3)]), 
    brand: fb.control(data?.brand, [Validators.required, Validators.minLength(3)]),
    minYear: fb.control(data?.minYear, [Validators.required]),
    maxYear: fb.control(data?.maxYear, [Validators.required]),
    minHp: fb.control(data?.minHp, [Validators.required]),
    maxHp: fb.control(data?.maxHp, [Validators.required]),


    


  });


}