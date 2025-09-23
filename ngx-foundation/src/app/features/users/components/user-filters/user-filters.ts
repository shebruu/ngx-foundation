
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserFilterFormFactory } from '../../form/userfilter.form.factory';
import { UserFilter } from '../../form/interfaces/userfilter.form';
import {JsonPipe} from '@angular/common';
@Component({
  selector: 'app-user-filters',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './user-filters.html',
  styleUrl: './user-filters.scss'
})


export class UserFilters {
    private userFilterFormFactory = inject(UserFilterFormFactory)
    public userFilterForm = this.userFilterFormFactory.createForm()

    //Pour permettre de visualiser les valeurs contenues dans le form
    public formContent: UserFilter | undefined;

    public submitForm(){
      if(this.userFilterForm.valid){
        this.formContent = this.userFilterForm.getRawValue();
      } else {
        this.userFilterForm.markAllAsTouched()
      }
    }

}

// constructor(fb: NonNullableFormBuilder) { si pas d injection 
//   this.fb = fb;
// }


// injection FormsModule ou factory a la creation de composant  ()