import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/admin/user-service';

@Component({
  selector: 'app-create-manager-dialog',
  templateUrl: './create-manager-dialog.component.html',
  styleUrls: ['./create-manager-dialog.component.scss']
})
export class CreateManagerDialogComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('password'),
    role: new FormControl(''),
    approveLimit: new FormControl(''),
    ative: new FormControl('')
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  createManager(){
    console.log("check if true")
    console.log(this.userForm.value)
    console.log(this.userForm.valid)
    if(this.userForm.valid){
      this.userService.createManager(this.userForm.value).subscribe({
        next: (data: any) => {
          console.log(data)
        },
        error: (e) => {
          console.log(e)
        }
      })
    }else{
      console.log("form is invalid")

    }
  }
}

// {
//   "email": "manager20@gmail.com",
//   "name": "manager20",
//   "password": "password",
//   "role": "MANAGER",
//   "lastName": "t.",
//   "approveLimit": 19000,
//   "active": 1
// }