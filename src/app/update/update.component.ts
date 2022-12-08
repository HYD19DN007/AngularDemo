import { Component, OnInit } from '@angular/core';
import { HttpusersService } from '../httpusers.service';
import { User } from '../User';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 public msg:any="";
  public topics=['Angular','React','Vue'];
  //userModel=new User('Thu','Thu@gmail.com',3434343,'Angular','Morning',true);
  userModel =new User();
  constructor(private _userService:HttpusersService) { }
 
  isTimePrefValid(t:string):boolean {

    if(t=="") return true;

    else return false;

  }

  getUserData(form:any)
  {}

  sendId(id:any)
  {
    this._userService.getbyId(id).subscribe(data=>this.userModel=data);
  
  }
updateData(id:any,form:any)
{

  this._userService.updateuser(id,form.value).subscribe(data=>{this.msg=data})
}

  ngOnInit(): void {
  }

}
