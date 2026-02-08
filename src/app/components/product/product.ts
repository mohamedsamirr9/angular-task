import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoundedShadow } from '../../direcrives/rounded-shadow';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RoundedShadow, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  detailsOpen = false;
  @Input() product: any;
  @Output() increase = new EventEmitter<number>();
  increaseStatus() {
    this.increase.emit(this.product.id);
  }
  @Output() show = new EventEmitter<IProduct>();
  showDet() {
    this.show.emit(this.product);
  }
}
