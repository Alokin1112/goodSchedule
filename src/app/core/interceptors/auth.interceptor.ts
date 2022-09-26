import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '@core/services/auth/user.service';
import { Router } from '@angular/router';
import { environment } from '@env/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // if (!this.userService.isAuthenticated()) {
    //   request = request.clone({
    //     setHeaders: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     }
    //   });
    // }
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.userService.getUserToken()}`,
      }
    });

    return next.handle(request);
  }
}

