import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
  selector: "productTableComponent",
  templateUrl: "productTable.component.html",
})
export class ProductTableComponent {
  constructor(private repository: ProductRepository) {}

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(id?: number) {
    // 1
    this.repository.deleteProduct(id);
  }
}
