import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showMenuItem:boolean=true;
  constructor(private _Router : Router) 
  { 

  }

  logout(){
    localStorage.removeItem("token");
    this._Router.navigateByUrl("/login"); 
    this.showMenuItem=false;   
  }
  ngOnInit(): void {
    let token= localStorage.getItem("token");
    if(token){
      this.showMenuItem=true;
    }else{
      this.showMenuItem=false;
    }
  
  }

}
