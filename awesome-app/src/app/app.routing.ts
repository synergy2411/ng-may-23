import { Routes } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ObservableDemoComponent } from './demo/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './demo/pipe-demo/pipe-demo.component';
import { UsersComponent } from './users/users.component';
import { LoginGuard } from './services/guards/login.guard';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth', // http://localhost:4200/auth
    component: RegistrationComponent,
  },
  {
    path: 'users', // http://localhost:4200/users
    component: UsersComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'pipe-demo', // http://localhost:4200/pipe-demo
    component: PipeDemoComponent,
  },
  {
    path: 'observable-demo', // http://localhost:4200/observable-demo
    component: ObservableDemoComponent,
  },
  {
    path: '**', // http://localhost:4200/anything
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
