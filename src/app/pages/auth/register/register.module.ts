import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from '@pages/auth/register/register-routing.module';
import { RegisterComponent } from '@pages/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '@core/services/auth/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { UiModule } from '@shared/ui/ui.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    UiModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [
    AuthService,
  ]
})
export class RegisterModule { }
