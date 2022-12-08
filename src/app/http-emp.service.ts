import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { IEmployee } from './IEmployee';
@Injectable({
  providedIn: 'root'
})
export class HttpEmpService {

  private url:string="http://localhost:3000/Employees/"
  constructor(private http:HttpClient) 
  { }
  getEmps():Observable<IEmployee []>
  {
    return this.http.get<IEmployee[]>(this.url);
  }
  getEmpById(id:string):Observable<IEmployee>
  {
    return this.http.get<IEmployee>(this.url+id);
  }


}
