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
  @Input() style?: TitleStyleEnum; // Optionnel avec enum typé
  
  // Exposer l'enum au template
  TitleStyleEnum = TitleStyleEnum;
  
  // Getter pour avoir une valeur par défaut
  get alignmentClass(): string {
    return this.style || TitleStyleEnum.CENTER;
  }
}
