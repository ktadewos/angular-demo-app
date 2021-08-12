import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../model/common.model';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl:string = 'http://localhost:3000/api/login';
  loggedInUserUrl:string = 'http://localhost:3000/api/me';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(this.loginUrl, user).pipe((map((res:ApiResponse) => res.result)));
  }

  getAccessToken() {
    return localStorage.getItem('token')
  }
  getCurrentUserApi(): Observable<any> {
    return this.http.get(this.loggedInUserUrl).pipe((map((res: ApiResponse) => res.result)));
  }

  isloggedIn(){
    return localStorage.getItem('token');
  }

  getCurrentUser() {
    const userData = window.localStorage.getItem("userData");
    return JSON.parse(userData == null ? '' : userData);
  }

}
