import { RoutesPath } from '@core/enums/routes-path.enum';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { UserService } from '@core/services/auth/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuardGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.userService.isAuthenticated())
      return true;
    return this.router.createUrlTree([RoutesPath.AUTH]);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.isAuthenticated())
      return true;
    return this.router.createUrlTree([RoutesPath.AUTH]);
  }

}
