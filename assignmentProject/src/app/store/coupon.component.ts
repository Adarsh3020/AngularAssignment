import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'coupon-app',
  templateUrl: 'coupon.component.html'
})

export class CouponComponent  {
  public isApplyed : boolean = false ; 
  constructor(private repository: ProductRepository,private router : Router) { }

  applyCoupon(){
    this.isApplyed = true;
    this.repository.applyCoupon();
    console.log(this.isApplyed);
    //this.router.navigateByUrl("/store");
  }
  notApplyCoupon(){
    //this.repository.notApplyCoupon();
    this.router.navigateByUrl("/store");
  }
 
}
