import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  // État des sous-menus
  private showUsers = false;
  private showCars = false;

  toggleUsers(): void {
    this.showUsers = !this.showUsers;
    console.log('Toggle Users:', this.showUsers);
  }

  toggleCars(): void {
    this.showCars = !this.showCars;
    console.log('Toggle Cars:', this.showCars);
  }
}