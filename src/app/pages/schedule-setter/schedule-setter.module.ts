import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleSetterRoutingModule } from '@pages/schedule-setter/schedule-setter-routing.module';
import { ScheduleSetterComponent } from '@pages/schedule-setter/schedule-setter.component';


@NgModule({
  declarations: [
    ScheduleSetterComponent,
  ],
  imports: [
    CommonModule,
    ScheduleSetterRoutingModule,
  ]
})
export class ScheduleSetterModule { }
