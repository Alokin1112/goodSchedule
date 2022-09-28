import { UserService } from '@core/services/auth/user.service';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationUserLoginData } from '@core/interfaces/authentication-user-data.interface';
import { AuthService } from '@core/services/auth/auth.service';
import { filter, map, Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { RoutesPath } from '@core/enums/routes-path.enum';

@Component({
  selector: 'ds-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  onDestroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  handleLogin() {
    const userData = this.form.value as AuthenticationUserLoginData;
    this.authService.login(userData).pipe(
      map(({ token }) => token),
      filter((token) => !!token),
      takeUntil(this.onDestroy$),
    ).subscribe((token) => {
      this.userService.setUserToken(token);
      this.router.navigateByUrl(`${RoutesPath.HOME}`);
    })
  }
}
