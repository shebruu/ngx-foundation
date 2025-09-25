import { Component } from '@angular/core';
import { CarForm } from '../components/car-form/car-form';
import { PageTitle } from '../../../shared/components/page-title/page-title';
import { TitleStyleEnum } from '../../../shared/enums/title-style.enum';
@Component({
  selector: 'app-edit',
  imports: [CarForm, PageTitle],
  templateUrl: './edit.html',
  styleUrl: './edit.scss'
})
export class Edit {
  TitleStyleEnum = TitleStyleEnum;

}
