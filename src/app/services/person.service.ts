import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiListResponse } from '../model/common.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl: string = environment.API;

  constructor(private http:HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/persons').pipe((map((res:ApiListResponse) => res.result)));
  }
}
