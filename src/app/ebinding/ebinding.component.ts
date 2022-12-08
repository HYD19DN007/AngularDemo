import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebinding',
  template: `
  <button (blur)="greeting($event)">Click</button>
   {{greet}}
  <input #myInput type="text">
  <input #myInput3 type="text">

  <button (click)="LogMessage(myInput,myInput3)">GetText</button>
  {{msg}}<br>
<br> 
  <input type="text" #myInput1 (blur)="LogMessage1(myInput1)">
    {{message}}
    <input type="text" #myInput2 (change)="LogMessage2(myInput2)">
    {{message2}}

`,
  styleUrls: ['./ebinding.component.css']
})
export class EbindingComponent implements OnInit {

  constructor() { }
  public greet="";
  public msg="";
  public message="";
  public message2="";
  LogMessage2(message2:any)
  {
    this.message2=message2.value;

  }



  LogMessage1(message:any)
  {
    this.message=message.value;

  }
  
  LogMessage(msg:any,msg1:any)
  {
    this.msg=msg.value+ " "+ msg1.value;
  }
  
  ngOnInit(): void {
  }
  greeting(event:any)
  {
    console.log(event);
      this.greet=event.type;

  }
   

}
