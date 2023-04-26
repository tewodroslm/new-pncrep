import { Component, OnInit } from '@angular/core';
import { CreatePaymentDialogComponent } from 'src/app/dialogs/create-payment-dialog/create-payment-dialog.component';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-payment-action',
  templateUrl: './payment-action.component.html',
  styleUrls: ['./payment-action.component.scss']
})
export class PaymentActionComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openPaymentDialog(){
    console.log("Create Payment dialog clicked")
 
      const dialogRef = this.dialog.open(CreatePaymentDialogComponent, {
        panelClass: 'custom-dialog-container',
        position: {
          left: '31%',
          top: '90px'
        },  
        width: '800px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
         
      });
 
  }

}
