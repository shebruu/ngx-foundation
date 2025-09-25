import { Component } from '@angular/core';
import { UserForm as UserFormComponent } from '../components/user-form/user-form';
import { PageTitle } from '../../../shared/components/page-title/page-title';
import { TitleStyleEnum } from '../../../shared/enums/title-style.enum';

@Component({
  selector: 'app-create',
  imports: [UserFormComponent, PageTitle],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class Create {
  TitleStyleEnum = TitleStyleEnum;
}
