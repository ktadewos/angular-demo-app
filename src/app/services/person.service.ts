import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiListResponse, ApiResponse } from '../model/common.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl: string = environment.API;

  constructor(private http:HttpClient) { }

  getPersons(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/persons').pipe((map((res:ApiListResponse) => res.result)));
  }

  addPerson(person:Person):Observable<any>{
    return this.http.post(this.baseUrl + 'api/persons',person).pipe((map((res:ApiResponse) =>
       res.result
    )))
  }

  updatePerson(person:Person):Observable<any>{
    return this.http.put(this.baseUrl + 'api/persons',person).pipe((map((res:ApiResponse) =>
       res.result
    )))
  }

  deletePerson(id:any):Observable<any>{
    return this.http.delete(this.baseUrl + 'api/persons/' + id).pipe((map((res:ApiResponse) =>
       res.result
    )))
  }
}
