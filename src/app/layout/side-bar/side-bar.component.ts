import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/data-share.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  paymentTab = true;
  adminTab = false;
  reportTab = false;


  constructor(public router: Router, private data: DataShareService) { }

  showFiller = true;

  ngOnInit(): void {
  }

  tabSelected(val: string){
    switch(val){
      case "payment": {
        this.data.updatePaymentTab();
        this.router.navigate(["home/payment"])
        this.paymentTab = true;
        this.reportTab = false;
        this.adminTab = false;
        break;
      }
      case "admin": {
        this.data.updateAdminTab();
        this.adminTab = true;
        this.paymentTab = false;
        this.reportTab = false;
        break;
      }
      case "report": {
        this.data.updateReportTab();
        this.router.navigate(["home/report"])
        this.paymentTab = false;
        this.reportTab = true;
        this.adminTab = false;
        break;
      }
      default: {
        break;
      }
    }
 
  }

}
