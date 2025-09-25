import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTitle } from '../../../shared/components/page-title/page-title';
import { TitleStyleEnum } from '../../../shared/enums/title-style.enum';
import { DetailCard, DetailItem, ActionButton } from '../../../shared/components/detail-card/detail-card';

@Component({
  selector: 'app-view',
  imports: [PageTitle, DetailCard],
  templateUrl: './view.html',
  styleUrl: './view.scss'
})


export class View {
  private readonly _ar:ActivatedRoute=inject(ActivatedRoute);
  TitleStyleEnum = TitleStyleEnum;
  currentCarId: string = '';


  carDetails: DetailItem[] = [
    { label: 'Brand', value: 'Tesla' },
    { label: 'Year', value: 2020 },
    { label: 'Color', value: 'Red' }
  ];

  carActions: ActionButton[] = [
    { label: 'Edit Car', action: 'edit', style: 'primary' },
    { label: 'Back to List', action: 'back', style: 'secondary' }
  ];

  constructor() {
    // Récupération de l'ID depuis l'URL
    const paramId: string | null = this._ar.snapshot.paramMap.get('id');
    if (paramId) {
      this.currentCarId = paramId;
      console.log("Car ID:", this.currentCarId);
    }
  }

  onCarActionClicked(action: string) {
    console.log('Action clicked:', action);
    switch(action) {
      case 'edit':
        console.log('Navigate to edit car');
        break;
      case 'back':
        console.log('Navigate back to cars list');
        break;
    }
  }
}
