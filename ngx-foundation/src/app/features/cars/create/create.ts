import { Component } from '@angular/core';
import { CarForm } from '../components/car-form/car-form';
import { PageTitle } from '../../../shared/components/page-title/page-title';
import { TitleStyleEnum } from '../../../shared/enums/title-style.enum';
@Component({
  selector: 'app-create',
  imports: [CarForm, PageTitle],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class Create {
  TitleStyleEnum = TitleStyleEnum;

}