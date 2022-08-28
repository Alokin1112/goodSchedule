import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    CardComponent,
  ]
})
export class UiModule { }
