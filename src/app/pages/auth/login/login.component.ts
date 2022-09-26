import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationUserLoginData } from '@core/interfaces/authentication-user-data.interface';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'ds-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  handleLogin() {
    const userData = this.form.value as AuthenticationUserLoginData;
    this.authService.login(userData).subscribe(res => console.log(res));
  }
}
