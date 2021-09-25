import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';

import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { BakersignupComponent } from './bakersignup/bakersignup.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { FilterPipe } from './shared/filter.pipe';
import { ConfirmComponent } from './confirm/confirm.component';

import { BakerComponent } from './baker/baker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    LoginComponent,
    ProductsComponent,
    AddproductsComponent,
    ProductListComponent,
    UpdateProductComponent,
    BakersignupComponent,
    UsersignupComponent,
    FilterPipe,
    ConfirmComponent,
   
    BakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
