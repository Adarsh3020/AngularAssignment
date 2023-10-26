import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {
    public applyCoupon :boolean =false;
    public isCheckApplyed :boolean = false;
    
    constructor(public cart: Cart , public product : ProductRepository ) {
        this.isCheckApplyed = this.product.couponApplyed;
     }

    applyedCoupon(){
        this.applyCoupon = true;
    }
}
