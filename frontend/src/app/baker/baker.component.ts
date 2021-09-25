import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-baker',
  templateUrl: './baker.component.html',
  styleUrls: ['./baker.component.css']
})
export class BakerComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    this.router.navigate([""]);
  }


}
