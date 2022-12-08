import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  

  public name="techwave";
  public date=new Date();
  public ename="";
public person=
{
  "Firstname":"a",
  "Lastname":"b"
}

 @Input() public childvalue:any;

 @Output() public childEvent=new EventEmitter();
  constructor(private eservice:EmployeeService) { }

  onclick(msg:any)
  {
    this.childEvent.emit(msg);// Assign the text to $event
  }
  onsubmit()
  {
    this.childEvent.emit(this.ename);

  }
public emps:any=[];

  ngOnInit(): void {
    this.emps=this.eservice.getEmployees();

  }

}
