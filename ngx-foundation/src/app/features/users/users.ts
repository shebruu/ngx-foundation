import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
import { UserFiltersComponent } from './components/user-filters/user-filters';
import { PageTitle } from '../../shared/components/page-title/page-title';
import { TitleStyleEnum } from '../../shared/enums/title-style.enum'; 

@Component({
  selector: 'app-users',
  imports: [PageTitle,UserFiltersComponent],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
  TitleStyleEnum = TitleStyleEnum;
}
