import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() dsTitle: string;
  @Input() dsSubtitle: string;
}
