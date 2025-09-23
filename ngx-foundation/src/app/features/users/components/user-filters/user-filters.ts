
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { createUserFilterform } from '../../form/userfilter.form';

@Component({
  selector: 'app-user-filters',
  imports: [ReactiveFormsModule],
  templateUrl: './user-filters.html',
  styleUrl: './user-filters.scss'
})


export class UserFilters {

private readonly fb = inject(NonNullableFormBuilder);
public userfilterForm = createUserFilterform(this.fb);
public submitForm(){

  console.log(this.userfilterForm.value);
  if(this.userfilterForm.valid){
    alert("formulaire bien valide");


  }else{
    this.userfilterForm.markAllAsTouched();
    alert("formulaire invalide");

}
}


// constructor(fb: NonNullableFormBuilder) { si pas d injection 
//   this.fb = fb;
// }

}
// injection FormsModule ou factory a la creation de composant  ()