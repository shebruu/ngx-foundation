import { Component, Input } from '@angular/core';
import { TitleStyleEnum } from '../../enums/title-style.enum';

@Component({
  selector: 'app-page-title',
  imports: [],
  templateUrl: './page-title.html',
  styleUrl: './page-title.scss'
})
export class PageTitle {
  @Input() title: string = "";
  @Input() style?: TitleStyleEnum; 
  @Input() subtitle?: string;

}
