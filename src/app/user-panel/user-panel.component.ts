import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
  name=""
  readValue = ()=>{
    let data:any = {"name":this.name}
    console.log(data)
    this.api.searchProduct(data).subscribe(
      (response:any) => {
        console.log(response)
        if (response.length==0) {
          alert("Invalid Product name")
        } else {
          this.searchData=(response)
      }
      }
    )
  }

searchData:any = []

  constructor(private api:ApiService){
    api.fetchProduct().subscribe(
      (response)=>{
        this.viewData = response;
      }
    )
  }
viewData:any = []

}
