import { Component,inject } from '@angular/core';
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
  currentUserId: string = '';

  userDetails: DetailItem[] = [
    { label: 'Firstname', value: 'John' },
    { label: 'Lastname', value: 'Doe' },
    { label: 'Birthdate', value: '1990-01-15' }
  ];

  userActions: ActionButton[] = [
    { label: 'Edit User', action: 'edit', style: 'primary' },
    { label: 'Back to List', action: 'back', style: 'secondary' }
  ];

  constructor() {
    // Récupération de l'ID depuis l'URL
    const paramId: string | null = this._ar.snapshot.paramMap.get('id');
    if (paramId) {
      this.currentUserId = paramId;
      console.log("User ID:", this.currentUserId);
    }
  }

  onUserActionClicked(action: string) {
    console.log('Action clicked:', action);
    switch(action) {
      case 'edit':
        console.log('Navigate to edit user');
        break;
      case 'back':
        console.log('Navigate back to users list');
        break;
    }
  }
}
