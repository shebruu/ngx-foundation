import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CarFormFactory } from '../../form/carForm.factory';

@Component({
  selector: 'app-car-form',
  imports: [ReactiveFormsModule],
  templateUrl: './car-form.html',
  styleUrl: './car-form.scss'
})
export class CarForm {
  private readonly carFormFactory = new CarFormFactory();
  public carForm = this.carFormFactory.createForm();
  public carControls = this.carForm.controls;

  public submitForm(){
    if(this.carForm.valid){

    } else this.carForm.markAllAsTouched();
  }

}
