import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `<div>This is Sample Code</div>
            <div>This is Second  Inline Template</div>
            <h1>THis inline template for H1 tag</h1>
            <h1>Welcome {{name}}</h1>
            <h1>{{2+6}}</h1>
            <h1>{{"Welcome "+ name}}</h1>
            <h1>{{name.length}}</h1>
            <h1>{{name.toUpperCase()}}</h1>
            <h1>{{greetUser()}}</h1>
            <h1>{{site}}</h1>
            <h1>{{2+5}}</h1>
            
`,
  styles: [`
  div{
    color:red;
  }
  h1
  {
    color:yellow;
    }
  `]
})
export class SampleComponent implements OnInit {
  public name="Xavier";
  public site=window.location.href;
  constructor() { }
  greetUser()
  {
     return "This is first project of "+this.name;
  }

  ngOnInit(): void {
  }

}
