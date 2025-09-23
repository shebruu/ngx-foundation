import {inject, Injectable} from '@angular/core';
import {NonNullableFormBuilder, Validators} from '@angular/forms';
import {UserFilter} from './interfaces/userfilter.form';


@Injectable({
  providedIn: 'root'
})
export class UserFilterFormFactory {
    private fb:NonNullableFormBuilder = inject(NonNullableFormBuilder);

    public createForm(data?:Partial<UserFilter>){
      return this.fb.group({
        firstname: this.fb.control(data?.firstname, [Validators.required, Validators.minLength(2)]),
      })
    }
}
