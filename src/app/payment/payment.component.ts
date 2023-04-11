import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{

  tableData = [];
  constructor(
    private paymentService: PaymentService
  ) {  
  }
 
  ngOnInit(){
    this.loadMyPayment();
  }

  async loadMyPayment(){
    this.paymentService.getMyPayments().subscribe((data: any) => {
      // console.log(data)
      this.tableData = [...data];
      console.log("After loading data")
      console.log(this.tableData)
    })
  }

}
