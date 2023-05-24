import { Routes } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ObservableDemoComponent } from './demo/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './demo/pipe-demo/pipe-demo.component';
import { UsersComponent } from './users/users.component';
import { LoginGuard } from './services/guards/login.guard';
import { ProductsComponent } from './demo/products/products.component';
import { OverviewComponent } from './demo/products/overview/overview.component';
import { SpecificationComponent } from './demo/products/specification/specification.component';
import { ProductResolver } from './services/resolvers/product.resolver';
import { DoNotLeaveGuard } from './services/guards/do-not-leave.guard';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth', // http://localhost:4200/auth
    component: RegistrationComponent,
    canDeactivate: [DoNotLeaveGuard],
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
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: ':productId/overview',
        component: OverviewComponent,
        resolve: { productData: ProductResolver },
      },
      {
        path: 'spec',
        component: SpecificationComponent,
      },
    ],
  },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: '**', // http://localhost:4200/anything
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
