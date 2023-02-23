import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent, },
      { path: 'payment', component: PaymentComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
