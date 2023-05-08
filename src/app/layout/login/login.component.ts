import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataShareService } from 'src/app/data-share.service';
import { AuthenticationGaurd } from 'src/app/services/authentication-guard.service';
import { UserLogin } from "../../models/user-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  constructor(
    private router: Router,
    private auth: AuthenticationGaurd,
    private data: DataShareService
    ) { }

  loginValid = true;
  public isAuthenticated = false;
 
  username = "";
  password = ""; 

  ngOnInit(): void {
  }

  onSubmit(){
    const user = {
      username: this.username,
      password: this.password
    } 
 
    this.auth.loginUser(user).subscribe(  
      (res: any) => {   
        const response = res.response.body;
        const userInf = {
          username: response.uname,
          lastname: response.lname,
          email: response.email,
          role: response.role,
          password: this.password,
          userId: response.uId,
        };
        this.data.userInfo = userInf;
        this.auth.holdUser(this.data.getUser());
        this.router.navigateByUrl('/home');        
      },  
      error => {  
        this.loginValid = false;  
      }  
   );   
  }

}
