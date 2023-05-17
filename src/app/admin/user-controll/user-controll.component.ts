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

  ngOnInit(): void {
    this.loadBasicUser();
  }

  loadBasicUser(){
    this.userService.getBasicUser().subscribe((data: any) => {
      console.log("#####")
      console.log(data)
      this.dataSource = data.response.body;
    })
    
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