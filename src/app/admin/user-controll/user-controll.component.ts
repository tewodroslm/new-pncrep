import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user-controll',
  templateUrl: './user-controll.component.html',
  styleUrls: ['./user-controll.component.scss']
})
export class UserControllComponent implements OnInit {

  dataSource;

  dataSourceMan: MatTableDataSource<any>;
  displayedColumns = ["id", "name", "lastName", "role", "email", "action"]
  displayedColumnsMan = ["id", "name", "lastName","approveLimit", "role", "email", "action"]
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) paginatorMan: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  mangerLoaded = false;
  
  constructor(private userService: UserService, private cd: ChangeDetectorRef) { }

  selectedTabIndex;

  ngOnInit(): void {
    this.selectedTabIndex = 0;
    this.loadBasicUser();
  }

  loadBasicUser(){
    this.userService.getBasicUser().subscribe((data: any) => {
      console.log("#####")
      console.log(data)
      // this.dataSource = data.response.body;
      this.dataSource = new MatTableDataSource(data.response.body);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    
  }

  loadManagers(){
    this.userService.getManagers().subscribe({
      next: (data: any) => {
        console.log("!!!!!!")
        console.log(data)
        this.dataSourceMan = new MatTableDataSource(data.response.body);
        this.dataSourceMan.paginator = this.paginatorMan;
        this.dataSourceMan.sort = this.sort;
        this.mangerLoaded =true;
      }, 
      error: (e) => {
        console.log(e)
      }
    })
  }

  onTabChanged(event){
    this.dataSource = [];
    let clickedIndex = event.index;
    console.log("****8 ", clickedIndex)
    if(clickedIndex == 1){
      this.loadManagers();
    }else{
      this.loadBasicUser();
    }     
    this.cd.detectChanges();
  }
 
}


//
// {
//  "response": {
//    "body": [
//      {
//      "name": "admin0",
//      "lastName": "t.",
//      "roles": [
//            {
//              "roleId": 1,
//              "role": "ADMIN"
//            }
//       ],
//      "email": "admin0@gmail.com",
//      "id": 1
//      },
//      {
//      "name": "admin0",
//      "lastName": "t.",
//      "roles": [
//            {
//              "roleId": 1,
//              "role": "ADMIN"
//            }
//       ],
//      "email": "admin0@gmail.com",
//      "id": 1
//      }
//     ]
//  }
//}