import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }
  setproduct(loginsuccess: any) {
    this.cartItemList.push(...loginsuccess);
    this.productList.next(loginsuccess);
  }
  addtoCart(loginsuccess: any) {
    this.cartItemList.push(loginsuccess);
    this.productList.next(this.cartItemList);
    this.getTotalprice();
    console.log(this.cartItemList);
  }
  getTotalprice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartitem(loginsuccess: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (loginsuccess.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
  }
  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
  }
}
