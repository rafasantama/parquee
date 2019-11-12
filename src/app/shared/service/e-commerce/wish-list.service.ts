import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscriber, Observable } from 'rxjs';
import { CartItem } from '../../../shared/model/e-commerce/cart.model';
import { Products } from '../../../shared/model/e-commerce/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './products.service';
import { ToastrService } from 'ngx-toastr';


// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("wishlistItem")) || [];

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  // wishlist array
  public wishlistProducts: BehaviorSubject<Products[]> = new BehaviorSubject([]);
  public observer: Subscriber<{}>;

  // Initialize 
  constructor(private toastrService: ToastrService) {
    this.wishlistProducts.subscribe(products => products = products);
  }

  // Get  wishlist Products
  public getProducts(): Observable<Products[]> {
    const itemsStream = new Observable(observer => {
      observer.next(products);
      observer.complete();
    });
    return <Observable<Products[]>>itemsStream;
  }

  // If item is aleready added In wishlist
  public hasProduct(product: Products): boolean {
    const item = products.find(item => item.id === product.id);
    return item !== undefined;
  }

  // Add to wishlist
  public addToWishlist(product: Products): Products | boolean {
    var item: Products | boolean = false;
    if (this.hasProduct(product)) {
      item = products.filter(item => item.id === product.id)[0];
      const index = products.indexOf(item);
    } else {
      products.push(product);
    }
    this.toastrService.success('This product added to Wishlist.'); // toasr services
    localStorage.setItem("wishlistItem", JSON.stringify(products));
    return item;
  }

  // Removed Product
  public removeFromWishlist(product: Products) {
    if (product === undefined) { return; }
    const index = products.indexOf(product);
    products.splice(index, 1);
    localStorage.setItem("wishlistItem", JSON.stringify(products));
  }
}
