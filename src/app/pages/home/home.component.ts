import { AuthService } from '@core/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '@core/services/auth/user.service';
import { Component, OnDestroy } from '@angular/core';
import { RoutesPath } from '@core/enums/routes-path.enum';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ds-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  onDestroy$ = new Subject<void>();

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  handleLogout() {
    if (!this.userService.isAuthenticated)
      return;
    this.authService.logout().pipe(
      filter((res) => res),
      takeUntil(this.onDestroy$),
    ).subscribe(() => {
      this.userService.logout();
      this.router.navigateByUrl(RoutesPath.AUTH);
    })
  }
}
