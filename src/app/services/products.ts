import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../constants/api_urls';
import { Iproductresponse } from '../models/iproductresponse';
import { Iproductfake } from '../models/iproductfake';

@Injectable({
  providedIn: 'root',
})
export class Products {
  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<Iproductresponse> {
    return this.httpClient.get<Iproductresponse>(API_URLS.getProducts);
  }

  getProduct(id: number): Observable<Iproductfake> {
    return this.httpClient.get<Iproductfake>(`${API_URLS.getProduct}/${id}`);
  }
  searchProducts(query: string): Observable<Iproductresponse> {
    return this.httpClient.get<Iproductresponse>(`${API_URLS.searchProducts}?q=${query}`);
  }
  addProduct(product: any): Observable<any> {
    return this.httpClient.post<any>(API_URLS.addProduct, product);
  }
  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${API_URLS.deleteProduct}/${id}`);
  }
}
