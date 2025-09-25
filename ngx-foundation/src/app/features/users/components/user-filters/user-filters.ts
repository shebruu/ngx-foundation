
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormFactory } from '../../form/userForm.factory';
import { UserFilters as UserFiltersInterface } from '../../form/interfaces/userfilters.form';

@Component({
  selector: 'app-user-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-filters.html',
  styleUrl: './user-filters.scss'
})
export class UserFiltersComponent {
  private userFormFactory = inject(UserFormFactory);
  public userFilterForm = this.userFormFactory.createUserFilterForm();
  

  @Output() FormFilterChanged = new EventEmitter<UserFiltersInterface>();

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
