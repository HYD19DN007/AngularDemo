import { Component, OnInit } from '@angular/core';
import { HttpEmpService } from '../http-emp.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-consumefile',
  templateUrl: './consumefile.component.html',
  styleUrls: ['./consumefile.component.css']
})
export class ConsumefileComponent implements OnInit {

  constructor(private service:HttpEmpService) { }
  public employees:any=[];
  public id="";
  public emp:any="";
  ngOnInit(): void {
  this.service.getEmps().subscribe(data=>this.employees=data);
  
   // this.employees=this.service.getEmps();
  }

  getById()
  {
    this.service.getEmpById(this.id).subscribe(data=>this.emp=data);

  }

}
