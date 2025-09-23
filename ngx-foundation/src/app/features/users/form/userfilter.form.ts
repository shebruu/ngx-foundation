// formulaire reactive

import { NonNullableFormBuilder, Validators } from "@angular/forms";

export interface UserFilters {
  firstname: string;


}
// specifier l optionnalite des props dans le formulaire ( partial)
export function createUserFilterform(fb: NonNullableFormBuilder, data?: Partial<UserFilters>) {
   return fb.group({
    firstname: fb.control(data?.firstname, [Validators.required, Validators.minLength(3)]),
    
  });
}