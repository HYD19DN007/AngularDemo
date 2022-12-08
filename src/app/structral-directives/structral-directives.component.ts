import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structral-directives',
  templateUrl: './structral-directives.component.html',
  styleUrls: ['./structral-directives.component.css']
})
export class StructralDirectivesComponent implements OnInit {

  public display=false;
  public marks=80;
  public clr='yellow';
  public names=['Anh','Karina','Katie','Thu'];
  constructor() { }

  ngOnInit(): void {
  }

}
