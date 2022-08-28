import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleSetterRoutingModule } from '@pages/schedule-setter/schedule-setter-routing.module';
import { ScheduleSetterComponent } from '@pages/schedule-setter/schedule-setter.component';
import { UiModule } from '@shared/ui/ui.module';
import { ScheduleSetterModulesModule } from '@modules/schedule-setter-modules/schedule-setter-modules.module';


@NgModule({
  declarations: [
    ScheduleSetterComponent,
  ],
  imports: [
    CommonModule,
    ScheduleSetterRoutingModule,
    UiModule,
    ScheduleSetterModulesModule,
  ]
})
export class ScheduleSetterModule { }
