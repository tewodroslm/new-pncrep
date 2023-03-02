import { Component, OnInit } from '@angular/core';Location
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/data-share.service';
import { AuthenticationGaurd } from 'src/app/services/authentication-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, private authentic: AuthenticationGaurd) { }

  menuVisible = false;

  ngOnInit(): void {
  }

  backClicked() {
    this.router.navigate(['/home'])
  }

  mouseEnter(){
    this.menuVisible = true;
  }

  mouseLeave() {
    setTimeout(() => {
      this.menuVisible = false;
    }, 1000)
  }

  logout(){
    this.authentic.logoutUser().subscribe((response) => {
      console.log(response)
    },
    error => {
      console.log(error)
    });
  }

}
