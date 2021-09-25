import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   public cartItemList : any =[]
    
    public products = new BehaviorSubject<any>([]);
    public search = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.products.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.products.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.products.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
  })
  return grandTotal;

}
removeCartItem(product : any){
  this.cartItemList.map((a:any, index:any)=>{
    if(product.productId === a.productId){
      this.cartItemList.splice(index,1);
    }
  })
  this.products.next(this.cartItemList);
}
removeAllCart(){
  this.cartItemList = []
  this.products.next(this.cartItemList);
}
}
