import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  name=""
  image=""
  category=""
  description=""
  price=""

  readValue=()=>{
    let data:any = {"name":this.name,"image":this.image,"category":this.category,"description":this.description,"price":this.price}
    console.log(data)
  }

}
