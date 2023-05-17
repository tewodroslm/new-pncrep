import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserControllComponent } from './user-controll/user-controll.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserControllComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }
