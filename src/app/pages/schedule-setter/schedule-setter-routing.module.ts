import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleSetterComponent } from '@pages/schedule-setter/schedule-setter.component';

const routes: Routes = [{ path: '', component: ScheduleSetterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleSetterRoutingModule { }
