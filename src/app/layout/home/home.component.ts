import { Component, OnInit } from '@angular/core';Location
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private _location: Location) { }

  menuVisible = false;

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

  mouseEnter(){
    this.menuVisible = true;
  }

  mouseLeave() {
    setTimeout(() => {
      this.menuVisible = false;
    }, 1000)
  }

}
