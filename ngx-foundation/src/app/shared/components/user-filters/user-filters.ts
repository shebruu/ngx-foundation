import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-user-filters',
  imports: [FormsModule, NgClass],
  templateUrl: './user-filters.html',
  styleUrl: './user-filters.scss'
})
export class UserFilters {
firstnameInput: string = '';

firstnameValidation():boolean {
  if (this.firstnameInput.length >= 3 && this.firstnameInput.length !== 0) {
  
    return true;
  }
  return false;
}
search():void {
  if (this.firstnameValidation()) {
    console.log('Searching for', this.firstnameInput);
  }
}

}
