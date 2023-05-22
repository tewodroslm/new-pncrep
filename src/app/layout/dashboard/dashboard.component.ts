import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/data-share.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    public data: DataShareService) { }

  ngOnInit(): void {
  }

  visit(){
    if(this.data.getUser().role[0].role == 'ADMIN'){
      this.router.navigate(["home/admin/user"], )
    }else{
      this.router.navigate(["home/payment"], )
    }
  }

}
