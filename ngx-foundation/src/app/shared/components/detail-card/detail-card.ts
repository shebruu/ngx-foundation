import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

export interface DetailItem {
  label: string;
  value: string | number | Date;
}

export interface ActionButton {
  label: string;
  action: string;
  style: 'primary' | 'secondary' | 'danger';
  route?: string; // navigation automatique
}

@Component({
  selector: 'app-detail-card',
  imports: [CommonModule],
  templateUrl: './detail-card.html',
  styleUrl: './detail-card.scss'
})
export class DetailCard {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private location = inject(Location);

  @Input() title: string = '';
  @Input() details: DetailItem[] = [];
  @Input() actions: ActionButton[] = [];
  @Input() entityType: string = ''; // 'cars' ou 'users'
  @Input() entityId: string | number = '';
  
  @Output() actionClicked = new EventEmitter<string>();

  onActionClick(action: ActionButton) {
    // Émettre l'événement pour le parent
    this.actionClicked.emit(action.action);

    // Navigation automatique selon l'action
    this.handleNavigation(action);
  }

  private handleNavigation(action: ActionButton) {
    switch(action.action) {
      case 'edit':
        if (this.entityType && this.entityId) {
          this.router.navigate([`/${this.entityType}/edit/${this.entityId}`]);
        }
        break;
      
      case 'back':
        if (this.entityType) {
          this.router.navigate([`/${this.entityType}`]);
        } else {
          //historique du navigateur
          this.location.back();
        }
        break;
      
      case 'delete':
        // ajouter une confirmation
        console.log('Delete action - implement confirmation dialog');
        break;
      
      default:
        // Route personnalisée 
        if (action.route) {
          this.router.navigate([action.route]);
        }
        break;
    }
  }
}
