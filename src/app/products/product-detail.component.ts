import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor(private productService: ProductService) { }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.onProductRetrieved(product),
      error => this.errorMessage = <any>error);
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }

  ngOnInit() {
  }

}
