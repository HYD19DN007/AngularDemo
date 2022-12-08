import { Component, OnInit } from '@angular/core';
import { HttpusersService } from '../httpusers.service';
import { User } from '../User';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public topics=['Angular','React','Vue'];
  //userModel=new User('Thu','Thu@gmail.com',3434343,'Angular','Morning',true);
  userModel =new User();
  constructor(private _userService:HttpusersService) { }
  getData()
  {
    console.log(this.userModel.userName+ " "+ this.userModel.email);
  }
getTopic(t:string):boolean
{
if(t=="-1")
  return true;
else
  return false;
}

  getUserData(form:any)
  {
    if(form.valid)
    {
     this._userService.addUser(form.value).subscribe(data=>{console.log(data);})

    }
    
  }
  isTimePrefValid(t:string):boolean {

    if(t=="") return true;

    else return false;

  }

  ngOnInit(): void {
  }

}
