import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataShareService } from '../data-share.service';
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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private paymentService: PaymentService, public data: DataShareService) { 
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
      },
      error: (error : any) => {
        console.log('Error Occured')
        console.log(error)
      }
    })
  }

}
