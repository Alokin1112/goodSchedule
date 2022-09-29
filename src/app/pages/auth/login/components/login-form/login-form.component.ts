import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RoutesPath } from '@core/enums/routes-path.enum';
import { AuthenticationUserLoginData, AuthenticationUserRegisterData } from '@core/interfaces/authentication-user-data.interface';
import { AuthService } from '@core/services/auth/auth.service';
import { UserService } from '@core/services/auth/user.service';
import { map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ds-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  isPasswordVisible: boolean;
  isLoading: boolean;
  routeToRegister = `/${RoutesPath.AUTH}/${RoutesPath.REGISTER}`;
  onDestroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  changePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  handleLogin() {
    this.isLoading = true;
    this.authService.login(this.getLoginData()).pipe(
      map(({ token }) => token),
      takeUntil(this.onDestroy$),
    ).subscribe((token) => {
      this.isLoading = false;
      token ? this.handleSuccessLogin(token) : this.handleFailureLogin();
    })
  }

  private handleSuccessLogin(token: string) {
    this.userService.setUserToken(token);
    this.router.navigateByUrl(`${RoutesPath.HOME}`);
  }

  private handleFailureLogin() {
    this._snackBar.open("Nieprawidłowy Login lub hasło", undefined, {
      duration: 2000,
      panelClass: 'snackbar-failure'
    })
  }

  private getLoginData(): AuthenticationUserLoginData {
    return {
      user: this.form.value
    }
  }
}
