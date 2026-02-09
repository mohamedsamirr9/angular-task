import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { RoundedShadow } from '../../direcrives/rounded-shadow';
import { CommonModule } from '@angular/common';
import { CreditCardPipe } from '../../pipes/credit-card-pipe';
import { HideDigitsPipe } from '../../pipes/hide-digits-pipe';
import { Product } from '../product/product';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, CreditCardPipe, HideDigitsPipe, Product],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  showDetails = false;
  selectedProduct: IProduct | null = null;
  date = new Date();
  creditCard = '1234567812345678';

  store = new Store('Book', ['Cairo', 'Alex', 'Mansoura'], 'images/logo.jfif');
  storeOwner = 'Mohamed Samir';
  constructor(private productService: ProductsService) {}
  showDet(product: IProduct) {
    this.selectedProduct = product;
    this.showDetails = true;
  }
  close() {
    this.showDetails = false;
  }
  get filteredProducts(): IProduct[] {
    return this.productService.filteredProducts;
  }
  increase() {
    this.productService.increase;
  }
}
