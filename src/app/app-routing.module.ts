import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { AdminRoutingModule } from './admin/admin-route-routing.module';
import { AuthGuard } from './auth-guard.service';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { PaymentComponent } from './payment/payment.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent},
      { path: 'payment', component: PaymentComponent },
      { path: 'report', component: ReportsComponent },
      { path: 'admin', component: PaymentComponent },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'admin',
        loadChildren: () => AdminRoutingModule ,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
