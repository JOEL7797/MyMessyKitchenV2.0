import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  item= {
    productId :'',
    productName:'',
    productType:'',
    price:'',
    quantity:'',
    description:'',
    location : '',
    imageUrl:''}

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:2222/products");
  }
  getProduct(id:any){
    return this.http.get("http://localhost:2222/"+id);
  }

newProduct(item:any)
{
  return this.http.post("http://localhost:2222/insert",{"product":item})
  .subscribe(data =>{console.log(data)})
}
deleteProduct(id:any)
  {

    return this.http.delete("http://localhost:2222/remove/"+id)

  }
  editProduct(product:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:2222/update",product)
    .subscribe(data =>{console.log(data)})
  }

}