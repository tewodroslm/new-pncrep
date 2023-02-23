import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: 'payment', component: PaymentComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
