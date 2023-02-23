import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  constructor(private router: Router ) { }

  loginValid = true;
  public isAuthenticated = false;

  username = "";
  password = "";


  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['home']);
  }

}
