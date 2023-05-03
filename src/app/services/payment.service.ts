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
    createPayment(payment: any){
        return this.httpClient.post(this.url + endpoint.PAYMENT_USER + `/create`, payment);
    }

    // get my payment

    getMyPayments(){
       return this.httpClient.get(this.url + endpoint.PAYMENT_USER + `/get?userId=2`);
    }

    getCompany(){
       return this.httpClient.get(this.url + endpoint.COMPANY_LIST);
    }

}