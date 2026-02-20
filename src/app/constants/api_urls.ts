import { environment } from '../../environments/environment.development';

const domain = environment.Domain;

export const API_URLS = {
  getProducts: `${domain}products`,
  getProduct: `${domain}products`,
  addProduct: `${domain}products/add`,
  deleteProduct: `${domain}products`,
  searchProducts: `${domain}products/search`,
  login: `${domain}auth/login`,
};
