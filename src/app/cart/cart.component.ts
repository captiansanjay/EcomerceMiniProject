import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product: any = [];
  public grandTotal!: number;
  constructor(private cartservice: CartService) { }
  

  title = "Google pay button";

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(
      res => {
        this.product = res;
        this.grandTotal = this.cartservice.getTotalprice();
      }
    )
  }
  removeItem(item: any) {
    this.cartservice.removeCartitem(item);
  }
  emptycart() {
    this.cartservice.removeAllCart();
  }

  onLoadPaymentData(event : any){
console.log("load payment data",event.detail);
  }



}
