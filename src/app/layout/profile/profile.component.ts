import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/data-share.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username : string = '';
  email: string = '';
  role :any[] | undefined;

  constructor(private data: DataShareService) { }

  ngOnInit(): void {
    const uInf = JSON.parse(localStorage.getItem('userinfo')!); 
    this.username = uInf.username + " " + uInf.lastname;
    this.email = uInf.email;
    this.role =  uInf.role;
  }

}
