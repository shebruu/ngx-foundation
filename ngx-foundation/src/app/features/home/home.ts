import { Component } from '@angular/core';
import { PageTitle } from '../../shared/components/page-title/page-title';
import { TitleStyleEnum } from '../../shared/enums/title-style.enum';

@Component({
  selector: 'app-home',
  imports: [PageTitle],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  // Exposer l'enum au template
  TitleStyleEnum = TitleStyleEnum;
}
