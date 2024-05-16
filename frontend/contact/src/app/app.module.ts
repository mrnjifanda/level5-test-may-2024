import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
// import { ContactComponent } from './dash/add-contact/add-contact.component';
import { AddContactComponent } from './dash/add-contact/add-contact.component';
import { EditContactComponent } from './dash/edit-contact/edit-contact.component';
import { AddUserComponent } from './dash/add-user/add-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    // ContactComponent,
    AddContactComponent,
    EditContactComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
