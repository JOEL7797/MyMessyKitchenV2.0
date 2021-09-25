import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataservice:DataService, private router :Router) { }
  logindata={
    email:'',
    pass:''
  }
  role=[{
    role:''
  }]
  id:any;
  ngOnInit(): void {
  }
  login(){
    this.dataservice.login(this.logindata)
    .subscribe((data) =>{
     
     if(data.toString()=="Invalid password"){
       alert('invalid password')
     }
     
     else{
      
      
      localStorage.setItem('token', data.toString())
      
       
      
      
    
     }
    })
  this.dataservice.logincheck(this.logindata).subscribe((data:any) =>{
     
    this.role = JSON.parse(JSON.stringify(data))
    let obj = this.role.find((o, i) => {
      return o
    })
    if (obj?.role == 'user'){
      this.router.navigate(["products"])
    }else if(obj?.role=='baker'){
      this.router.navigate(["products"])
    }else{
      this.router.navigate(["product-list"])
    }
    
   })
  }
}
