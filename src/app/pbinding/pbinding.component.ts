import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pbinding',
  templateUrl: './pbinding.component.html',
  styleUrls: ['./pbinding.component.css']
})
export class PbindingComponent implements OnInit {

  public myId="empId";
  public flag=false;

  constructor() { }
  ngOnInit(): void {
  }

}
