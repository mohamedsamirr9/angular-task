import { Component, inject } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  product: IProduct | null = null;
  //http://localhost:4200/products/2
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsService.getProductById(id);
  }
  private productsService = inject(ProductsService);

  back() {
    this.router.navigate(['/products']);
  }
}
