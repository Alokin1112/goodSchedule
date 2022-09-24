import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPath } from '@core/enums/routes-path.enum';
import { AuthorizationGuardGuard } from '@core/guards/authorization-guard.guard';
const routes: Routes = [
  {
    path: RoutesPath.HOME,
    loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthorizationGuardGuard],
    canLoad: [AuthorizationGuardGuard],
  },
  {
    path: RoutesPath.AUTH,
    loadChildren: () => import('@pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    redirectTo: RoutesPath.HOME,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: `${RoutesPath.HOME}/${RoutesPath.DASHBOARD}`,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
