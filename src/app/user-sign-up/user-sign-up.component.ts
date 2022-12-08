import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent {
  constructor(private api: ApiService, private route: Router) { }
  name = ""
  address = ""
  phone = ""
  email = ""
  password = ""
  confirmPassword = ""

  readValue = () => {

    let data: any = {
      "name":this.name,
      "address":this.address,
      "phone":this.phone,
      "email":this.email,
      "password":this.password,
      "confirmPassword":this.confirmPassword
    }

    if(this.password == this.confirmPassword){
      this.api.userSignUp(data).subscribe(
        (response: any) => {
          this.name = ""
          this.address = ""
          this.phone = ""
          this.email = ""
          this.password = ""
          this.confirmPassword = ""
          if (response.status == "success") {
            alert(response.message)
            this.route.navigate(["/userlogin"])
          } else {
            alert(response.message)
          }
        }
      )
    }else{
      alert("Check Password Again")
    }
    
  }
}
