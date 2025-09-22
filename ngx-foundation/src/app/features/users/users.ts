import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserFilters } from '../../shared/components/user-filters/user-filters';

@Component({
  selector: 'app-users',
  imports: [RouterLink,UserFilters],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {

}
