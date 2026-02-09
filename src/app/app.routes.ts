import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { ProductDetails } from './components/product-details/product-details';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Products,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'products/:id',
    component: ProductDetails,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: '**',
    component: NotFound,
  },
];
