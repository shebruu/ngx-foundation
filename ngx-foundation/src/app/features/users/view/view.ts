import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  imports: [],
  templateUrl: './view.html',
  styleUrl: './view.scss'
})
export class View {
private _ar=inject(ActivatedRoute)
}
