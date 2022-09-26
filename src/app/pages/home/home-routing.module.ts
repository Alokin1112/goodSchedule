import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPath } from '@core/enums/routes-path.enum';
import { AuthorizationGuardGuard } from '@core/guards/authorization-guard.guard';
import { HomeComponent } from '@pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: RoutesPath.DASHBOARD,
        loadChildren: () => import('@pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthorizationGuardGuard],
        canLoad: [AuthorizationGuardGuard],
      },
      {
        path: RoutesPath.SCHEDULE,
        loadChildren: () => import('@pages/schedule-setter/schedule-setter.module').then(m => m.ScheduleSetterModule),
        canActivate: [AuthorizationGuardGuard],
        canLoad: [AuthorizationGuardGuard],
      },
    ]
  },
  {
    path: '**',
    redirectTo: RoutesPath.DASHBOARD,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
