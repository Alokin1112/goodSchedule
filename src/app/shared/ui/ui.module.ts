import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@shared/ui/components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { LayoutSpanComponent } from '@shared/ui/components/layout-span/layout-span.component';

@NgModule({
  declarations: [
    CardComponent,
    LayoutSpanComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    CardComponent,
    LayoutSpanComponent,
  ]
})
export class UiModule { }
