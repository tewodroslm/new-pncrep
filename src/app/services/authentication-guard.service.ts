import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { endpoint } from "../enum/endpoint";
import { BehaviorSubject, Observable } from "rxjs";
import { UserLogin } from "../models/user-login";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGaurd {

    isLoggedInSubject = new BehaviorSubject<boolean>(this.hasInfo());

    constructor(
        private httpClient: HttpClient,
        ){}

    backend: string = environment.backendUrl;

    loginUser(user: any){
        const url = this.backend + endpoint.AUTH_USER;
        return this.httpClient.post(url, user,  { responseType: 'json' });
    }

    holdUser(user: any){
        console.log('hold user info in service call ', user)
        localStorage.setItem('userinfo', JSON.stringify(user));
        this.isLoggedInSubject.next(true);
    }

    logoutUser(){
        const url = this.backend + endpoint.LOGOUT_USER;
        return this.httpClient.get(url);
    }

    removeUserInfoUpOnLogout(){
        localStorage.removeItem('userinfo');
        this.isLoggedInSubject.next(false);
    }

    private hasInfo(): boolean{
        return !!localStorage.getItem('userinfo');
    }
}