import { Component, OnInit } from '@angular/core';
import {ProductModel} from './product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle:String = "Admin-Panel";
  imageWidth: number = 120;
  imageHeight: number = 120;
  imageMargin: number = 2;
  products= [{
    productId : '',
    productName : '',
    productType : '',
    price : '',
    quantity : '',
    description : '',
    location : '',
    imageUrl : ''}]

  
  constructor(private router:Router,private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));

    })
  }
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['update']);

  }
  deleteProduct(product:any)
  {
    this.productService.deleteProduct(product._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
      })
  

  }
  logout(){
    localStorage.clear()
    this.router.navigate([""]);
  }

}
