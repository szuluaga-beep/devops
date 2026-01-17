import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products';
import { DevopsComponent } from './pages/devops/devops';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: ProductsComponent
  },
  {
    path: 'devops',
    component: DevopsComponent
  }
];
