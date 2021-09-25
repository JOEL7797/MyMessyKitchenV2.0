import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { BakersignupComponent } from './bakersignup/bakersignup.component';
import { ConfirmComponent } from './confirm/confirm.component';
import {BakerComponent} from './baker/baker.component';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch:'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component : LoginComponent},
  {path: 'addproducts', component:AddproductsComponent},
  {path: 'product-list', component:ProductListComponent},
  {path: 'update', component:UpdateProductComponent},
  {path: 'bakersign' , component:BakersignupComponent},
  {path:"usersign" , component:UsersignupComponent},
  {path:"confirm", component:ConfirmComponent},
  {path: "baker", component:BakerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
