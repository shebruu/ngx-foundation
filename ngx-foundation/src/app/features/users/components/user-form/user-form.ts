import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormFactory } from '../../form/userForm.factory';
import { User } from '../../form/interfaces/user.interface';
import { isRequired, hasMinLengthError, hasBirthYearError } from '../../../../core/utils/formvalidation.utils';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserForm {
  private readonly userFormFactory = new UserFormFactory();
  public userForm = this.userFormFactory.createUserForm({});
  public userControls = this.userForm.controls;
  
  // Utilitaires de validation
  public isRequired = isRequired;
  public hasMinLengthError = hasMinLengthError;
  public hasBirthYearError = hasBirthYearError;
  
  // État du formulaire
  public showSuccess = false;
  public createdUser: User | null = null;

  public submitForm() {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;
      this.createdUser = {
        firstname: formValue.firstname || '',
        lastname: formValue.lastname || '',
        birth_date: Number(formValue.birth_date) || 0
      };
      
      this.showSuccess = true;
      console.log('Utilisateur créé:', this.createdUser);
      
      // Reset après 20 secondes
      setTimeout(() => {
        this.showSuccess = false;
        this.createdUser = null;
      }, 20000);
    } else {
      this.userForm.markAllAsTouched();
      console.log('Formulaire invalide');
    }
  }
}
