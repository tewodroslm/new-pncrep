import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PaymentService } from '../services/payment.service';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{

  tableData = [];
  constructor(
    private paymentService: PaymentService,
    private dataShare: DataShareService
  ) {  
  }
 
  ngOnInit(){
    this.loadMyPayment();
  }

  async loadMyPayment(){
    const userId = this.dataShare.getUser();
    console.log('****** User Id *****')
    console.log(userId)
    const role = userId.role.find((o) => o.role == 'MANAGER');
    
    console.log(role)
    
    if(role == undefined){
      this.paymentService.getMyPayments(userId.userId).subscribe((data: any) => {
        // console.log(data)
        const response = data.response.body;
        this.tableData = [...response]; 
      })
    }else{
        this.paymentService.getALLPayments().subscribe((data: any) => {
          const response = data.response.body;
          this.tableData = [...response]; 
        })
    }
   
  }

}
