import { Routes } from '@angular/router';
import { Layout } from './layout';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home').then(c => c.Home)
      },
      {
        path: 'sales',
        loadComponent: () => import('./pages/sales').then(c => c.Sales)
      }
    ]
  }
];
