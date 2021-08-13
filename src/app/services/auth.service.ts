import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/common.model';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.API;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(this.baseUrl + 'api/login', user).pipe((map((res:ApiResponse) => res.result)));
  }

  getAccessToken() {
    return localStorage.getItem('token')
  }
  getCurrentUserApi(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/me').pipe((map((res: ApiResponse) => res.result)));
  }

  isloggedIn(){
    return localStorage.getItem('token');
  }

  getCurrentUser() {
    const userData = window.localStorage.getItem("userData");
    return JSON.parse(userData == null ? '' : userData);
  }

}
