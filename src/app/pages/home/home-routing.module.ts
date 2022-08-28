import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPath } from '@core/constants/RoutesPath.const';
import { HomeComponent } from '@pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: RoutesPath.SCHEDULE,
    loadChildren: () => import('@pages/schedule-setter/schedule-setter.module').then(m => m.ScheduleSetterModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
