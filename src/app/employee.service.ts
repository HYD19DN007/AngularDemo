import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
getEmployees()
{
return [
  {"id":1,"name":"Alaman","age":23},
  {"id":2,"name":"Xavier","age":22},
  {"id":3,"name":"Karina","age":21},
  {"id":4,"name":"Emerson","age":23}
];

}

}
