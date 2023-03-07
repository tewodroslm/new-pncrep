import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationGaurd } from './services/authentication-guard.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationGaurd) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
      const username = JSON.parse(localStorage.getItem('userinfo')!).username;
      const password = JSON.parse(localStorage.getItem('userinfo')!).password;
      const authReq = req.clone({
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `Basic ${window.btoa(username + ":" + password)}`
          })
      });
      return next.handle(authReq);
    } else {
        return next.handle(req);
    }
  }

  

}
