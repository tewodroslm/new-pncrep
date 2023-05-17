import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { DataShareService } from "../data-share.service";
import { endpoint } from "../enum/endpoint";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    url: string = environment.backendUrl

    constructor(
        private httpClient: HttpClient,
        private dataShare: DataShareService
    ){}

    // get all payments

    // create payments
    getBasicUser(){
        return this.httpClient.get(this.url + endpoint.ADMIN_EP + `/basic-users`);
    }

  

}