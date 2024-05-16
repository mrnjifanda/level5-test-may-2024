import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { AddContactComponent } from './dash/add-contact/add-contact.component';
import { EditContactComponent } from './dash/edit-contact/edit-contact.component';
import { AddUserComponent } from './dash/add-user/add-user.component';

const routes: Routes = [
  {path : '' ,  component : HomeComponent},
  {path : 'dashboard' ,  component : DashboardComponent},
  {path : 'add_user' ,  component : AddUserComponent},
  {path : 'add_contact' ,  component : AddContactComponent},
  {path : 'edit_contact' ,  component : EditContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
