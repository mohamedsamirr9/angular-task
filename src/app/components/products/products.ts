import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { RoundedShadow } from '../../direcrives/rounded-shadow';
import { CommonModule } from '@angular/common';
import { CreditCardPipe } from '../../pipes/credit-card-pipe';
import { HideDigitsPipe } from '../../pipes/hide-digits-pipe';
import { Product } from '../product/product';

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
  searchTerm: string = '';
  selectedCategory: number = 0;
  store = new Store('Book', ['Cairo', 'Alex', 'Mansoura'], 'images/logo.jfif');
  storeOwner = 'Mohamed Samir';
  productList: IProduct[] = [
    {
      id: 1,
      name: 'Book A',
      quantity: 2,
      price: 50,
      img: 'images/img1.jpg',
      cateogryID: 1,
    },
    {
      id: 2,
      name: 'Book B',
      quantity: 0,
      price: 70,
      img: 'images/img2.jpg',
      cateogryID: 1,
    },
    { id: 3, name: 'Pen', quantity: 100, price: 5, img: 'images/img3.jpg', cateogryID: 2 },
    {
      id: 4,
      name: 'Notebook',
      quantity: 50,
      price: 20,
      img: 'images/img1.jpg',
      cateogryID: 2,
    },
    { id: 5, name: 'Bag', quantity: 20, price: 150, img: 'images/img2.jpg', cateogryID: 3 },
    {
      id: 6,
      name: 'Pencil',
      quantity: 1,
      price: 3,
      img: 'images/img3.jpg',
      cateogryID: 2,
    },
  ];
  increase(id: number): void {
    const product = this.productList.find((p) => p.id === id);
    if (product) {
      product.quantity += 1;
    }
  }
  showDet(product: IProduct) {
    this.selectedProduct = product;
    this.showDetails = true;
  }
  close() {
    this.showDetails = false;
  }
  get filteredProducts(): IProduct[] {
    return this.productList.filter(
      (p) =>
        (!this.searchTerm || p.name.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (this.selectedCategory == 0 || p.cateogryID == this.selectedCategory),
    );
  }
}
