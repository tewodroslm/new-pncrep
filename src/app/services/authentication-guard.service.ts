import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { endpoint } from "../enum/endpoint";
import { UserLogin } from "../models/user-login";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGaurd {

    constructor(private httpClient: HttpClient){}

    backend: string = environment.backendUrl;

    loginUser(user: any){
        const url = this.backend + endpoint.AUTH_USER;
        return this.httpClient.post(url, user,  { responseType: 'json' });
    }

    logoutUser(){
        const url = this.backend + endpoint.LOGOUT_USER;
        return this.httpClient.get(url);
    }
}