import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cbinding',
  templateUrl: './cbinding.component.html',
  styleUrls: ['./cbinding.component.css']
})
export class CbindingComponent implements OnInit {

  public result='';
  public marks=31;
  public hasError=false;
  public isSpecial=true;
  public messageClasses=
  {
    "success":!this.hasError,
    "danger":this.hasError,
    "textSpecial":this.isSpecial
  }
public titlestyles=
{
  color:'red',
  fontStyle:"italic",
  FontFace: "Verdana"
  
}

public C='brown';

  constructor() { }

  ngOnInit(): void {
      if(this.marks>90)
        {
          this.result="success";
        }
      else if(this.marks>70)
        {
          this.result="moderate";
        }
      else
        {
          this.result="danger";
        }
      }

}
