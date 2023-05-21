import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationGaurd } from "./services/authentication-guard.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthenticationGaurd, private router: Router){}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isUserLoggedIn()) {
          // redirect to some view explaining what happened
          this.router.navigateByUrl('/');
          return false;
        } else {
          return true;
        }
      }
    
}