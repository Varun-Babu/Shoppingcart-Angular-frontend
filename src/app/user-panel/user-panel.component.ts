import { Component } from '@angular/core';

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
  }

}
