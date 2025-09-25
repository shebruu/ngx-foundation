import { Component } from '@angular/core';
import { CarForm } from '../components/car-form/car-form';

@Component({
  selector: 'app-create',
  imports: [CarForm],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class Create {

}
