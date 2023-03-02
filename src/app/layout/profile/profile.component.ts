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
    this.username = this.data.user.username + this.data.user.lastname;
    this.email = this.data.user.email;
    this.role =  this.data.user.role;
  }

}
