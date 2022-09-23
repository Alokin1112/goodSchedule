import { Injectable } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { KeyStorage } from '@core/enums/key-storage.enum';
import { Router } from '@angular/router';
import { RoutesPath } from '@core/enums/routes-path.enum';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userToken: string;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  setUserToken(token: string): void {
    this.localStorageService.setItem(KeyStorage.USER_AUTHENTICATION_TOKEN, token);
  }

  getUserToken(): string {
    return this.localStorageService.getItem<string>(KeyStorage.USER_AUTHENTICATION_TOKEN);
  }

  isAuthenticated(): boolean {
    return !!this.getUserToken();
  }

  logout(): void {
    this.clearAll();
  }

  // isTokenExpired(): boolean {
  //   const { expires_at } = this.user();

  //   return isAfter(new Date(), new Date(expires_at));
  // }

  // private user(): string {
  //   return this.localStorageService.getItem<string>(KeyStorage.USER_AUTHENTICATION_TOKEN);
  // }

  private clearAll(): void {
    this.localStorageService.clear();
    void this.router.navigateByUrl(RoutesPath.AUTH);
  }
}
