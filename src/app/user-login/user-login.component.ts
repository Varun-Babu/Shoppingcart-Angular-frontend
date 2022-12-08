import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  password=""
  email=""

  constructor(private route:Router){}

  readValue = () =>{
    let data:any = {"email":this.email,"Password":this.password}
    console.log(data)

    if (this.email=="user@gmail.com" && this.password=="23" ) {
      this.route.navigate(['/userpanel'])
      
    } else {
      alert("invalid credentials")
      
    }
  }

}
