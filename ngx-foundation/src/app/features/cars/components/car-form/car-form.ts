import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CarFormFactory } from '../../form/carForm.factory';
import { isRequired, hasMinLengthError, hasMinError } from '../../../../core/utils/formvalidation.utils';

@Component({
  selector: 'app-car-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './car-form.html',
  styleUrl: './car-form.scss'
})
export class CarForm {
  private readonly carFormFactory = new CarFormFactory();
  public carForm = this.carFormFactory.createForm();
  public carControls = this.carForm.controls;
  
  //  utilitaires
  public isRequired = isRequired;
  public hasMinLengthError = hasMinLengthError;
  public hasMinError = hasMinError;
  
  // Variable pour afficher la voiture créée dans la vue
  public createdCar: any = null;
  public showSuccess = false;

  public submitForm(){
    if(this.carForm.valid){
      // Récupérer les données du formulaire
      const carData = this.carForm.getRawValue();
      
    
      console.log("Voiture créée:", carData);
      console.log("Brand:", carData.brand);
      console.log("Model:", carData.model);
      console.log("HP:", carData.hp);
      console.log("Year:", carData.year);
      
      // sauvegarde pour vue
      this.createdCar = carData;
      this.showSuccess = true;
      
      // Reset après 20 secondes
      setTimeout(() => {
        this.carForm.reset();
        this.showSuccess = false;
        this.createdCar = null;
      }, 20000);
      
    } else this.carForm.markAllAsTouched();
  }

}
