import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuardGuard implements CanActivate {

  constructor(private router:Router,
    private tokenService: TokenStorageService
   ) {}
   canActivate():boolean{
 
     if(this.tokenService.getToken()!==null){
       return true;
     }
     else {
 this.router.navigate(['login']);
 return false;
     }
   }
  
}
