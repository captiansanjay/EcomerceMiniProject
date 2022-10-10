import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
  public productlist: any;
  public totalItem:number=0;
  constructor(private api: RegistrationService, private cartservice: CartService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(res => { this.productlist = res;
      this.productlist.forEach((a: any) => {
        Object.assign(a, {quantity:1, total: a.price })
  
      });
    })
    this.cartservice.getProducts().subscribe(res=>{
      this.totalItem=res.length;
    })

  }

  addtoCart(item: any) {
    this.cartservice.addtoCart(item);
  }

}
