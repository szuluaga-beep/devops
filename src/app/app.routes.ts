import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: ProductsComponent
  }
];
