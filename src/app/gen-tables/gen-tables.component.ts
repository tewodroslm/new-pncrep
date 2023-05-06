import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(){  

    console.log('table length ', this.tableData.length)

    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
 

  }

}
