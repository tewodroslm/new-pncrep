import { Component, Input, OnInit } from '@angular/core';


export interface PeriodicElement {
  id: number;
  pay_description : string;
  status: string;
  referenceNumber: string;
  amount: number;
} 
@Component({
  selector: 'app-gen-tables',
  templateUrl: './gen-tables.component.html',
  styleUrls: ['./gen-tables.component.scss']
})
export class GenTablesComponent implements OnInit {

  @Input() tableData: any[] = [];

  displayedColumns: string[] = ['id', 'pay_description', 'referenceNumber', 'amount', 'status', 'action'];
  dataSource = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log("Inside table comp")
    console.log(this.tableData)
    this.tableData.forEach(element => {
      console.log(element)
    });

    this.dataSource = [...this.tableData];
  }

}
