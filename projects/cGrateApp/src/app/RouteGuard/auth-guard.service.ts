import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { CGrateAuthService } from 'projects/c-grate-common/src/lib/cGrateServices/c-grate-auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  constructor(private authservice:CGrateAuthService,private router:Router) { }

  canActivate()
  {
    if(this.authservice.isLoggedIn())return true;
    this.router.navigate(['/']);
    return false;
  }
}
