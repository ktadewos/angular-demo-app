import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiListResponse } from '../model/common.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personUrl:string = 'http://localhost:3000/api/persons';

  constructor(private http:HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.personUrl).pipe((map((res:ApiListResponse) => res.result)));
  }
}
