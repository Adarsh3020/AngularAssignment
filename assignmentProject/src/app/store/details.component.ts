import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';

@Component({
    selector: 'app-details',
    templateUrl: 'details.component.html',
    styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
    private id: number = 0;
    public detailItem :any ;
    constructor(private route: ActivatedRoute,private router:Router,private repo : ProductRepository, private cart: Cart,) {

        this.route.paramMap.subscribe({
            next:(paras) => {
               this.id = Number(paras.get('id'));
               console.log(this.id);
            }
        });
        
        this.detailItem = this.repo.getProduct(this.id);
    }
    addProductToCart(product: Product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }
    allProductToStore(){
        this.router.navigateByUrl("/store");
    }

    ngOnInit() { }
}