import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(): boolean | Observable<boolean> 
  {
    let token = localStorage.getItem("token")
    if(token){

      return true;
    }
    this._Router.navigateByUrl("/login");
    return false;
    
  }

  constructor(private _Router:Router) { }
}
