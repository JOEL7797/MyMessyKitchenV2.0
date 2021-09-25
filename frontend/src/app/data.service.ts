import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  constructor(private http :HttpClient) { }


  registerdata(item:any){
    return this.http.post("http://localhost:2222/register",{"data":item})
    
    
  }
  login(item:any)
  {   
    return this.http.post("http://localhost:2222/login",{"data":item})
    
} 

logincheck(item:any)
  {   
    return this.http.post("http://localhost:2222/logincheck",{"data":item})
    
} 
}
