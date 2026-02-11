import { Component, SimpleChanges, OnInit, OnChanges, Input } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { Store } from '../../models/store';
import { ProductsService } from '../../services/products-service';
import { CommonModule } from '@angular/common';
import { CreditCardPipe } from '../../pipes/credit-card-pipe';
import { HideDigitsPipe } from '../../pipes/hide-digits-pipe';
import { Product } from '../product/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  imports: [CommonModule, CreditCardPipe, HideDigitsPipe, Product, FormsModule],
  styleUrls: ['./products.css'],
})
export class Products {
  @Input() searchTerm: string = '';
  @Input() selectedCategory: number = 0;
  date = new Date();
  creditCard = '1234567812345678';
  filteredProducts: IProduct[] = [];
  showDetails = false;
  selectedProduct: IProduct | null = null;
  store = new Store('Book', ['Cairo', 'Alex', 'Mansoura'], 'images/logo.jfif');
  storeOwner = 'Mohamed Samir';

  constructor(public productService: ProductsService) {}
  ngOnInit() {
    this.filteredProducts = this.productService.filteredProducts;
    this.applyfilteredProducts();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchTerm'] || changes['selectedCategory']) {
      this.applyfilteredProducts();
    }
  }

  applyfilteredProducts() {
    this.productService.searchTerm = this.searchTerm;
    this.productService.selectedCategory = this.selectedCategory;
    this.filteredProducts = this.productService.filteredProducts;
  }

  showDet(product: IProduct) {
    this.selectedProduct = product;
    this.showDetails = true;
  }

  close() {
    this.showDetails = false;
  }

  increase(event: any) {
    this.productService.increase(event);
  }
}
