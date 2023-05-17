import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentActionComponent } from './actions/payment-action/payment-action.component';


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

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';

import { MatDialogModule } from '@angular/material/dialog';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminActionComponent } from './actions/admin-action/admin-action.component';

@NgModule({
  declarations: [
    PaymentActionComponent,
    AdminActionComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule, 
    MatPaginatorModule,
    MatNativeDateModule, 
    MatMenuModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule
  ],
  exports: [
    PaymentActionComponent,
    AdminActionComponent,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule, 
    MatPaginatorModule,
    MatNativeDateModule, 
    MatMenuModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule
  ]
})
export class SharedModule { }
