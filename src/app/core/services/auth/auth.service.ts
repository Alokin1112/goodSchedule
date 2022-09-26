import { Api } from './../../enums/api.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationUserLoginData, AuthenticationUserRegisterData } from '@core/interfaces/authentication-user-data.interface';
import { environment } from '@env/environment';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthenticationResponse } from '@core/interfaces/authentication-response.interface';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  register(registerData: AuthenticationUserRegisterData): Observable<boolean> {
    return this.http.post<unknown>(`${environment.httpBackend}${Api.SIGNUP}`, registerData).pipe(
      map(() => true),
      catchError(() => of(false)),
    )
  }

  login(loginData: AuthenticationUserLoginData): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${environment.httpBackend}${Api.SIGNUP}`, loginData).pipe(
      catchError(() => of({ token: "" })),
    )
  }
}
