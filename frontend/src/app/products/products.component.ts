import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute,Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products= [{
    productId : '',
    productName : '',
    productType : '',
    price : '',
    quantity : '',
    description : '',
    location : '',
    imageUrl : ''}]
   
    
    searchKey : string = "";
    public filterCategory : any;
    
  constructor(private router:Router,private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
      this.filterCategory=JSON.parse(JSON.stringify(data));
      this.products.forEach((a:any) =>{
        if(a.productType ==="Burger"){
          a.productType ="Burger"
        }
        

        Object.assign(a,{quantity:1,total:a.price});
      });
       
      
      });



this.cartService.search.subscribe((val:any)=>{
  this.searchKey = val;

  })  
}
addtocart(item: any){
  this.cartService.addtoCart(item);
}
filter(productType:string){
  this.filterCategory = this.products
  .filter((a:any)=>{
    if(a.productType == productType || productType==''){
      return a;
    }
  })
}



}
