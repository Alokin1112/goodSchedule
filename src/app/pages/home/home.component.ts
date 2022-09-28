import { Router } from '@angular/router';
import { UserService } from '@core/services/auth/user.service';
import { Component } from '@angular/core';
import { RoutesPath } from '@core/enums/routes-path.enum';

@Component({
  selector: 'ds-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  handleLogout() {
    if (!this.userService.isAuthenticated)
      return;
    this.userService.logout();
    this.router.navigateByUrl(RoutesPath.AUTH);
  }
}
