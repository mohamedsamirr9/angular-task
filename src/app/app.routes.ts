import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { ProductDetails } from './components/product-details/product-details';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';
import { Contact } from './pages/contact/contact';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { ProductsParent } from './components/products-parent/products-parent';
import { ProductsFake } from './components/products-fake/products-fake';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Products,
  },
  {
    path: 'products',
    component: ProductsFake,
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
  { path: 'register', component: Register, canActivate: [authGuard] },
  { path: 'login', component: Login, canActivate: [authGuard] },

  {
    path: '**',
    component: NotFound,
  },
];
