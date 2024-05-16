import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { EditcontactComponent } from './pages/editcontact/editcontact.component';
import { AddcontactComponent } from './pages/addcontact/addcontact.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { DashboardpageComponent } from './pages/dashboardpage/dashboardpage.component';

export const routes: Routes = [
    {
        path: '', component: HomepageComponent, title: 'Home'
    },
    {
        path: 'edit', component: EditcontactComponent, title: 'edit'
    },
    {
        path: 'adduser', component: AdduserComponent, title: 'adduser'
    },
    {
        path: 'addcontact', component: AddcontactComponent, title: 'addcontact'
    },
    {
        path: 'dashboard', component: DashboardpageComponent, title: 'dashboard'
    },
    {
        path: '**', redirectTo: '/', pathMatch: 'full'
    },
];
