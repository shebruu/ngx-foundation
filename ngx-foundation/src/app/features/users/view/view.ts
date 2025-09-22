import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  imports: [],
  templateUrl: './view.html',
  styleUrl: './view.scss'
})
export class View {
  private readonly _ar:ActivatedRoute=inject(ActivatedRoute);

  constructor() {

    // const d = this._ar.snapshot.params['id'];
    const paramId: string | null = this._ar.snapshot.paramMap.get('id');
if (paramId) {
// conversion en nb
  const id: number = +paramId;

  console.log("view is running ",typeof id,id);

}


  }
}
