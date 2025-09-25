import { Component } from '@angular/core';
import { UserForm } from '../components/user-form/user-form';
import { PageTitle } from '../../../shared/components/page-title/page-title';
import { TitleStyleEnum } from '../../../shared/enums/title-style.enum';

@Component({
  selector: 'app-edit',
  imports: [UserForm, PageTitle],
  templateUrl: './edit.html',
  styleUrl: './edit.scss'
})
export class Edit {
  TitleStyleEnum = TitleStyleEnum;
}
