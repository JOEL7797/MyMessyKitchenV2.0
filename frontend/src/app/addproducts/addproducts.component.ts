import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  title:String = "Add Product";

  constructor(private productService: ProductService,private router: Router) { }
  productItem = {
    productId:'',
    productName:'',
    productType:'',
    price:'',
    quantity:'',
    description:'',
    location:'',
    imageUrl:''}

  ngOnInit(): void {
  }
  AddProduct()
  {
    this.productService.newProduct(this.productItem);
    console.log('Called');
    alert("Success");
    this.router.navigate(['product-list']);
  }

}
