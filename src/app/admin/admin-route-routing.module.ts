import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserControllComponent } from './user-controll/user-controll.component';

const routes: Routes = [
  { path: 'user', component: UserControllComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
