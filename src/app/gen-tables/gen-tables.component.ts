import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataShareService } from '../data-share.service';
import { ErrorDialogComponent } from '../dialogs/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-gen-tables',
  templateUrl: './gen-tables.component.html',
  styleUrls: ['./gen-tables.component.scss']
})
export class GenTablesComponent implements OnInit {

  @Input() tableData: any[] = [];

  displayedColumns: string[] = ['id', 'pay_description', 'referenceNumber', 'amount', 'status', 'action'];
  dataSource: MatTableDataSource<any>;;

  @Output() methodEvent = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  statusArray: string[] = ['INITIATED', 'ON HOLD', 'CANCELED', 'APPROVED', 'PENDING APPROVAL']

  constructor(
    private paymentService: PaymentService, 
    public data: DataShareService,
    private dialog: MatDialog,
    private cd: ChangeDetectorRef) { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(){  

    console.log('table length ', this.tableData.length)

    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
 

  }

  actionClick(action: string, element){
    
    const paymentBody = {
      userId: this.data.getUser().userId,
      actionStatus: action,
      paymentId: element.id
    }
 
    this.applyActionCall(paymentBody);
   
    // {
    //   "userId": 4,
    //   "actionStatus": "PENDING_APPROVAL",
    //   "paymentId": 5
    // }

  }

  async applyActionCall(paymentBody: any){
    this.paymentService.approvePaymentAction(paymentBody).subscribe({
      next : (data: any) => {
        console.log('Action Approved!')
        console.log(data)
        const dialogRef = this.dialog.open(SuccessDialogComponent,{
          width: '500px',
          height: '130px',
          data:{
            message: 'Action applied successfully.',
            status: paymentBody.actionStatus
          }
        });
        dialogRef.afterClosed().subscribe(() => {
          this.methodEvent.emit();
        })
      },
      error: (error : any) => {
        console.log('Error Occured')
        console.log(error)
        const dialogRef = this.dialog.open(ErrorDialogComponent,{
          data:{
            message: 'Error occured while applying action.',
            status: paymentBody.actionStatus
          }
        });
      }
    })
  }

}
