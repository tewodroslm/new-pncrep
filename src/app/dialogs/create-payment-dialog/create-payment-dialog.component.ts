import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-create-payment-dialog',
  templateUrl: './create-payment-dialog.component.html',
  styleUrls: ['./create-payment-dialog.component.scss']
})
export class CreatePaymentDialogComponent implements OnInit {

  isLinear = false;

  firstFormGroup = new FormGroup({
    selectedVendor: new FormControl('', Validators.required),

    payment_type: new FormControl('', Validators.required), 
    tax: new FormControl('', Validators.required),
    shipment: new FormControl('', Validators.required),
    releasedAt: new FormControl('', Validators.required),
    note: new FormControl('', Validators.required), 
    amount: new FormControl('', Validators.required),
  });
  
  companyName: string = '';
 
  companyList: any[] = [];
  stepperBol = false;

  paymentCreationMsg = ''

  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('stepper') stepper2: MatStepper;

  constructor(private _formBuilder: FormBuilder, private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.getListOfCompany();
  }

  stepAndVerifyForm(){ 
    
    if(this.firstFormGroup.valid){
      this.stepperBol = !this.stepperBol
      this.stepper.next();
    }else{
      this.stepperBol = true;
      this.firstFormGroup.markAllAsTouched;
    }
    
    console.log(this.firstFormGroup)
  }

  createPayment(){
    console.log('***** submit ******')
    // temp payload
    const payment = {
      amount: this.firstFormGroup.get('amount').value,
      pay_description: this.firstFormGroup.get('note').value,
      company_id: this.firstFormGroup.get('selectedVendor').value
    }
    console.log(payment)
    this.paymentService.createPayment(payment).subscribe({
      next: () => {
        console.log('Next ---')
        this.paymentCreationMsg = 'Payment created. You are now done.';
        this.stepper2.next();
      },
      error: (e) => {
        console.log("******* Error occured *******");
        console.error(e);
        this.paymentCreationMsg = 'Payment not created. Error while creating payment';
      }
    })

  }

  async getListOfCompany(){
    this.paymentService.getCompany().subscribe({
      next: (data: any) => {
        console.log('Next ---')
        console.log(data)
        this.companyList = [...data.response.body]
      },
      error: (e) => {
        console.log("******* Error occured *******")
        console.error(e);
      },
      complete :  () => {
        console.log('Payment Created Successfully')
      } 
    })
  }

  companySelected(companyName: string){
    this.companyName = companyName;
  }

}

//  {
//    "amount": 6000,
//    "pay_description": "payment test 1",
//    "company_id": 1
//  }
