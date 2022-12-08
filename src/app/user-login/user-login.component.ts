import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  password=""
  email=""

  constructor(private api:ApiService,private route:Router){}

  readValue = () =>{
    let data:any = {"email":this.email,"password":this.password}
    console.log(data)
    this.api.userLogin(data).subscribe(
      (response: any) => {
        this.email = ""
        this.password = ""
        if (response.status == "success") {
          alert(response.message)
          this.route.navigate(["/userpanel"])
        } else {
          alert(response.message)
        }
      }
    )
    
    }
  }


