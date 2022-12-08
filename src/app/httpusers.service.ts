import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class HttpusersService {

  public url="http://localhost:3001/users/";

  constructor(private http:HttpClient) { }
  addUser(user:User):Observable<Object>
  {
    return this.http.post(this.url,user);
  }
  getbyId(id:number):Observable<User>
  {
    return this.http.get<User>(this.url+id)
  }
  updateuser(id:number,modifieduser:User):Observable<Object>
  {
    return this.http.put<User>(this.url+id,modifieduser);
  }

}
