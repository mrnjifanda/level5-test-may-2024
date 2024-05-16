import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent, title:'Home'},
    {path:"dashboard",component:DashboardComponent, title:'Dashboard'},
    {path:"addcontact",component:AddContactComponent, title:'Add Contact'},
    {path:"adduser",component:AddUserComponent, title:'Add User'},
    {path:"edit",component:EditContactComponent, title:'Home'},
];
