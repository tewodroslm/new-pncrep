import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { endpoint } from "../enum/endpoint";

@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    url: string = environment.backendUrl

    constructor(
        private httpClient: HttpClient
    ){}

    // get all payments

    // create payments

    // get my payment

    getMyPayments(){
       return this.httpClient.get(this.url + endpoint.GET_MY_PAYMENT + `/get?userId=2`)
    }

}