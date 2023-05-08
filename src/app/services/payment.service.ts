import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { DataShareService } from "../data-share.service";
import { endpoint } from "../enum/endpoint";

@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    url: string = environment.backendUrl

    constructor(
        private httpClient: HttpClient,
        private dataShare: DataShareService
    ){}

    // get all payments

    // create payments
    createPayment(payment: any){
        return this.httpClient.post(this.url + endpoint.PAYMENT_USER + `/create`, payment,   { responseType: 'text' as const });
    }

    // get my payment

    getMyPayments(userId: any){
       return this.httpClient.get(this.url + endpoint.PAYMENT_USER + `/get?userId=` + userId);
    }

    getALLPayments(){
        return this.httpClient.get(this.url + endpoint.PAYMENT_MANAGER);
     }

    getCompany(){
       return this.httpClient.get(this.url + endpoint.COMPANY_LIST);
    }

}