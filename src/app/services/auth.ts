import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../constants/api_urls';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private httpclient: HttpClient) {}
  login(username: string, password: string) {
    console.log(username, password);
    return this.httpclient.post(API_URLS.login, { username, password }).pipe(
      tap((res: any) => {
        localStorage.setItem('accessToken', res.accessToken);
      }),
    );
  }
  logout() {
    localStorage.removeItem('accessToken');
  }
  isLoggedIn(): boolean {
    if (localStorage.getItem('accessToken')) {
      return true;
    } else {
      return false;
    }
  }
}
