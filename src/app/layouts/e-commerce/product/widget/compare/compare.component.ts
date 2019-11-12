import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../../shared/service/e-commerce/products.service';
import { CartService } from '../../../../../shared/service/e-commerce/cart.service';
import { Products } from '../../../../../shared/model/e-commerce/product.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  public product            :   Observable<Products[]> = of([]);
  public products           :   Products[] = [];

  constructor(public productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit() {
    this.product = this.productsService.getComapreProducts();
    this.product.subscribe(products => this.products = products);
  }

   // Add to cart
   public addToCart(product: Products, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
 }
 
 // Remove from compare list
 public removeItem(product: Products) {
   this.productsService.removeFromCompare(product);
 }

}
