import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: "Seven Contacts" },
    { path: 'dashboard', component: DashboardComponent, title: "Seven Contacts" },
    { path: 'Edit', component: EditContactComponent, title: "Edit Contact" },
    { path: 'addcontact', component: AddContactComponent, title: "Add Contact" },
    { path: 'adduser', component: AddUserComponent, title: "Add User" },
];
