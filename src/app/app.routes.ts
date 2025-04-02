import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { loginGuard } from './guards/login.guard';
import { ViewEmployeComponent } from './pages/view-employe/view-employe.component';
import { FormEmployeComponent } from './pages/form-employe/form-employe.component';
import { EmployeListComponent } from './pages/employe-list/employe-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [loginGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'employees',
      },
      {
        path: 'employees',
        component: EmployeListComponent,
      },
      {
        path: 'new',
        component: FormEmployeComponent,
      },
      {
        path: 'update/:idEmployee',
        component: FormEmployeComponent,
      },
      {
        path: 'employee/:idEmployee',
        component: ViewEmployeComponent,
      },
    ],
  },
  { path: '**', redirectTo: '/login' },
];
