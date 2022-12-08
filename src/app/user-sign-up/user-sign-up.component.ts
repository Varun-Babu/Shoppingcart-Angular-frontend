import { Component } from '@angular/core';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent {
name=""
address=""
phone=""
email=""
password=""
  readValue=()=>{
    let data:any = {"name":this.name,"address":this.address,"phone":this.phone,"email":this.email,"password":this.password}
    console.log(data)
  }

}
