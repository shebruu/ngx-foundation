import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  // toggleUsers(state: boolean) {
  //   const usersMenu = document.getElementById('usersMenu');
  //   if (usersMenu) {
  //     usersMenu.style.display = state ? 'block' : 'none';
  //   }
  // }

  // toggleCars(state: boolean) {
  //   const carsMenu = document.getElementById('carsMenu');
  //   if (carsMenu) {
  //     carsMenu.style.display = state ? 'block' : 'none';
  //   }
  // }
  // disableUsers() {
  //   const usersMenu = document.getElementById('usersMenu');
  //   if (usersMenu) {
  //     usersMenu.classList.add('disable_users');
  //   }
  // }

  // disableCars() {
  //   const carsMenu = document.getElementById('carsMenu');
  //   if (carsMenu) {
  //     carsMenu.classList.add('disable_cars');
  //   }
  // }   
}