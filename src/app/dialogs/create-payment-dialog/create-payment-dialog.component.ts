import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    currency: new FormControl('', Validators.required),
    tax: new FormControl('', Validators.required),
    shipment: new FormControl('', Validators.required),
    releasedAt: new FormControl('', Validators.required),
    note: new FormControl('', Validators.required),
    secondCtrl: new FormControl('', Validators.required)
  });
 
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  stepAndVerifyForm(){
    console.log('****************')
    console.log(this.firstFormGroup)
  }

}
