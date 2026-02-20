import { Component, OnInit } from '@angular/core';
import { Products } from '../../services/products';
import { Iproductfake } from '../../models/iproductfake';
import { Iproductresponse } from '../../models/iproductresponse';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-fake',
  imports: [CommonModule, FormsModule],
  templateUrl: './products-fake.html',
  styleUrl: './products-fake.css',
})
export class ProductsFake implements OnInit {
  products: Iproductfake[] = [];
  query: string = '';
  isLoading: boolean = false;

  constructor(private productService: Products) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (result) => {
        this.products = result.products;
        console.log(this.products);
        this.isLoading = false;
      },
    });
  }
  getProductBySearch() {
    this.isLoading = true;

    this.productService.searchProducts(this.query).subscribe({
      next: (result) => {
        this.products = result.products;
        console.log(this.products);
        this.isLoading = false;
      },
    });
  }
}
