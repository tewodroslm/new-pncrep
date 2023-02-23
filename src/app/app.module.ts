import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenTablesComponent } from './gen-tables/gen-tables.component';
import { LoginComponent } from './landing/login/login.component';
import { HomeComponent } from './landing/home/home.component';
import { SideBarComponent } from './landing/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GenTablesComponent,
    LoginComponent,
    HomeComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
