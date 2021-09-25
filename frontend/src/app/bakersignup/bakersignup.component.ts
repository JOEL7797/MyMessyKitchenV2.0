import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bakersignup',
  templateUrl: './bakersignup.component.html',
  styleUrls: ['./bakersignup.component.css']
})
export class BakersignupComponent implements OnInit {
  userdata={
    name:'',
    email:'',
    pass:'',
    num:'',
    address:'',
    state:'',
    district:'',
    pincode:'',
    role:''
  }
  msg:any
  
  constructor(private dataservice:DataService, private router:Router) { }
  emailpattern= "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  pwdpattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  phonepattern = "^[7-9][0-9]{9}$"
  ngOnInit(): void {
  }

  adduser(){
    this.dataservice.registerdata(this.userdata)
    .subscribe((data)=>{
      this.msg=JSON.parse(JSON.stringify(data));
  
  
      if(this.msg.msg=="already there"){
        alert(this.userdata.name + " already registered")
      } else if(this.userdata.name=="suc"){
        alert('Sucess')
        this.router.navigate(["login"])
       }
      else{
      alert("Sucess")
      this.router.navigate(["login"])
      }
  
    })
   

}
}
