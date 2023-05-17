import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenTablesComponent } from './gen-tables/gen-tables.component';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { FooterComponent } from './layout/footer/footer.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { PaymentComponent } from './payment/payment.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import { ReportsComponent } from './reports/reports.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';
import { CreatePaymentDialogComponent } from './dialogs/create-payment-dialog/create-payment-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatPaginatorModule} from '@angular/material/paginator';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { CreateManagerDialogComponent } from './dialogs/create-manager-dialog/create-manager-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    GenTablesComponent,
    LoginComponent,
    HomeComponent,
    SideBarComponent,
    FooterComponent,
    ProfileComponent,
    PaymentComponent,
    DashboardComponent,
    ReportsComponent,
    CreatePaymentDialogComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    CreateManagerDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    BrowserAnimationsModule,  
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
