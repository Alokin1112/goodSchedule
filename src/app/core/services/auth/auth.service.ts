import { Api } from '@core/enums/api.enum';
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

  register(registerData: AuthenticationUserRegisterData): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${environment.httpBackend}${Api.REGISTER}`, registerData).pipe(
      catchError(() => of({ token: "" })),
    )
  }

  login(loginData: AuthenticationUserLoginData): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${environment.httpBackend}${Api.LOGIN}`, loginData).pipe(
      catchError(() => of({ token: "" })),
    )
  }

  logout(): Observable<boolean> {
    return this.http.delete<unknown>(`${environment.httpBackend}${Api.LOGOUT}`, {}).pipe(
      map(() => true),
      catchError(() => of(false)),
    )
  }
}
