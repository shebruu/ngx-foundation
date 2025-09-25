import { inject, Injectable } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { UserFilters } from './interfaces/userfilters.form';
import { User } from './interfaces/user.interface';
import { birthYearValidator } from '../../../core/utils/formvalidation.utils';


@Injectable({
  providedIn: 'root'
})


export class UserFormFactory {
  private fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  public createUserFilterForm(data?: Partial<UserFilters>) {
    return this.fb.group({
      firstname: this.fb.control(data?.firstname, [Validators.required, Validators.minLength(2)]),
    })
  }

  public createUserForm(data:Partial<User>) {
  return this.fb.group({

    firstname: this.fb.control(data?.firstname || '', [Validators.required, Validators.minLength(3)]),
    lastname: this.fb.control(data?.lastname || '', [Validators.required, Validators.minLength(2)]),
    birth_date: this.fb.control(data?.birth_date || '', [Validators.required, birthYearValidator])

  })

    }
   }
