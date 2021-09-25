import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  emailpattern= "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  pwdpattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  phonepattern = "^[7-9][0-9]{9}$"
  constructor(private router:Router , private dataservice :DataService) { }

  ngOnInit(): void {
  }
  userdata={
    name:'',
    email:'',
    pass:'',
    num:'',
    role:''
  }
  msg:any
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
