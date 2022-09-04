import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '@pages/dashboard/dashboard-routing.module';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { UiModule } from '@shared/ui/ui.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    UiModule,
  ]
})
export class DashboardModule { }
