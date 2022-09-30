import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleSetterRoutingModule } from '@pages/schedule-setter/schedule-setter-routing.module';
import { ScheduleSetterComponent } from '@pages/schedule-setter/schedule-setter.component';
import { UiModule } from '@shared/ui/ui.module';
import { ScheduleSetterModulesModule } from '@pages/schedule-setter/components/schedule-setter-modules/schedule-setter-modules.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ScheduleSetterComponent,
  ],
  imports: [
    CommonModule,
    ScheduleSetterRoutingModule,
    UiModule,
    ScheduleSetterModulesModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class ScheduleSetterModule { }
