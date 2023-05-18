import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user-controll',
  templateUrl: './user-controll.component.html',
  styleUrls: ['./user-controll.component.scss']
})
export class UserControllComponent implements OnInit {

  dataSource;
  displayedColumns = ["id", "name", "lastName", "role", "email", "action"]
  constructor(private userService: UserService) { }

  selectedTabIndex;

  ngOnInit(): void {
    this.selectedTabIndex = 0;
    this.loadBasicUser();
  }

  loadBasicUser(){
    this.userService.getBasicUser().subscribe((data: any) => {
      console.log("#####")
      console.log(data)
      this.dataSource = data.response.body;
    })
    
  }

  loadManagers(){
    this.userService.getManagers().subscribe({
      next: (data: any) => {
        console.log("!!!!!!")
        console.log(data)
      }, 
      error: (e) => {
        console.log(e)
      }
    })
  }

  onTabChanged(event){
    let clickedIndex = event.index;
    console.log("****8 ", clickedIndex)
    if(clickedIndex == 1){
      this.loadManagers();
    }
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