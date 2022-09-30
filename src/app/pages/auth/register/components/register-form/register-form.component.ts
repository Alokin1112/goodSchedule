import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RoutesPath } from '@core/enums/routes-path.enum';
import { AuthenticationUserLoginData, AuthenticationUserRegisterData } from '@core/interfaces/authentication-user-data.interface';
import { AuthService } from '@core/services/auth/auth.service';
import { UserService } from '@core/services/auth/user.service';
import { ConfirmedValidator } from '@core/validators/confirm-password.validator';
import { map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ds-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  isPasswordVisible: boolean;
  isLoading: boolean;
  onDestroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      password_confirmation: [null, [Validators.required, Validators.minLength(8)]],
    }, {
      validator: ConfirmedValidator('password', 'password_confirmation')
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
    this.authService.register(this.getRegisterData()).pipe(
      map(({ token }) => token),
      takeUntil(this.onDestroy$),
    ).subscribe((token) => {
      this.isLoading = false;
      token ? this.handleSuccessRegister(token) : this.handleFailureRegister();
    })
  }

  private handleSuccessRegister(token: string) {
    this.userService.setUserToken(token);
    this.router.navigateByUrl(`${RoutesPath.HOME}`);
  }

  private handleFailureRegister() {
    this._snackBar.open("Niepowodzenie rejestracji", undefined, {
      duration: 2000,
      panelClass: 'snackbar-failure'
    })
  }

  private getRegisterData(): AuthenticationUserRegisterData {
    return {
      user: this.form.value
    }
  }
}

