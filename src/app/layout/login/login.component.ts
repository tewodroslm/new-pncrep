import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataShareService } from 'src/app/data-share.service';
import { AuthenticationGaurd } from 'src/app/services/authentication-guard.service';

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
    console.log("User ", user)
    this.auth.loginUser(user).subscribe(  
      (res: any) => {   
        console.log(res)
        const response = res.response.body;
        const userInf = {
          username: response.name,
          lastname: response.lastname,
          email: response.email,
          role: response.roles,
          password: this.password,
          userId: response.id,
        };
        this.data.userInfo = userInf;
        this.auth.holdUser(this.data.getUser());
        this.router.navigateByUrl('/home');        
      },  
      error => {  
        this.loginValid = false;  
        console.log(error)
      }  
   );   
  }

}
