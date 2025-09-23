
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFilterFormFactory } from '../../form/userfilter.form.factory';
import { UserFilter } from '../../form/interfaces/userfilter.form';

@Component({
  selector: 'app-user-filters',
  imports: [ReactiveFormsModule],
  templateUrl: './user-filters.html',
  styleUrl: './user-filters.scss'
})
export class UserFilters {
  private userFilterFormFactory = inject(UserFilterFormFactory);
  public userFilterForm = this.userFilterFormFactory.createForm();
  

  @Output() FormFilterChanged = new EventEmitter<UserFilter>();

  public submitForm() {
    if (this.userFilterForm.valid) {
      const formData = this.userFilterForm.getRawValue();
      console.log("Formulaire valide", formData);
  
      this.FormFilterChanged.emit(formData);
    } else {
      this.userFilterForm.markAllAsTouched();
      console.log("Formulaire invalide");
    }
  }
}
