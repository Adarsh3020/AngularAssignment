import { Injectable } from "@angular/core";
import { Product } from "./product.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: any[] = [];
  public couponApplyed : boolean =false; //true

  constructor(private dataSource: RestDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category ?? "(None)")
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category?: string): Product[] {
    return this.products.filter(
      (p) => category == undefined || category == p.category
    );
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataSource
        .saveProduct(product)
        .subscribe((p) => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product).subscribe((p) => {
        this.products.splice(
          this.products.findIndex((p) => p.id == product.id),
          1,
          product
        );
      });
    }
  }

  deleteProduct(id?: number) {
    this.dataSource.deleteProduct(id).subscribe((p) => {
      this.products.splice(
        this.products.findIndex((p) => p.id == id),
        1
      );
    });
  }
  applyCoupon() : any {
    this.couponApplyed = true;
    // this.dataSource.getProducts().subscribe((data: any[]) => {
    //   this.products = data.map((item: any) => {
    //     const originalPrice = item.price;
    //     const discountedPrice = originalPrice - (originalPrice * 0.1);
    //     return { ...item, price: discountedPrice };
    //   });

    //   this.categories = this.products
    //     .map((p) => p.category)
    //     .filter((c, index, array) => array.indexOf(c) === index)
    //     .sort();
    // });
  }
  notApplyCoupon():any {
    this.couponApplyed = false;
    // this.dataSource.getProducts().subscribe((data: any[]) => {
    //   this.products = data;

    //   this.categories = this.products
    //     .map((p) => p.category)
    //     .filter((c, index, array) => array.indexOf(c) === index)
    //     .sort();
    // });
  }
}
