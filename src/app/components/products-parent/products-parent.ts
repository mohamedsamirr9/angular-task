import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from '../products/products';

@Component({
  selector: 'app-products-parent',
  imports: [CommonModule, FormsModule, Products],
  templateUrl: './products-parent.html',
})
export class ProductsParent {
  searchTerm: string = '';
  selectedCategory: number = 0;
}
