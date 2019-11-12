import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../../../../shared/model/e-commerce/product.model';
import { ProductsService } from '../../../../../shared/service/e-commerce/products.service';
import { CartService } from '../../../../../shared/service/e-commerce/cart.service';
import { WishListService } from '../../../../../shared/service/e-commerce/wish-list.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

  @Input() products: Products;

  // public product           :   Products = {};
  closeResult: string;
  public selectedSize: any = '';
  public counter: number = 1;

  constructor(private cartService: CartService,
    public productsService: ProductsService, private wishlistService: WishListService,
    private modalService: NgbModal) { }

  ngOnInit() { }

  // Add to cart
  public addToCart(product: Products, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
  }

  // Add to compare
  public addToCompare(product: Products) {
    this.productsService.addToCompare(product);
  }

  // Add to wishlist
  public addToWishlist(product: Products) {
    this.wishlistService.addToWishlist(product);
  }

  open(content, id) {
    this.productsService.getProduct(id).subscribe(product => this.products = product)
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // Change variant
  public changeVariantSize(variant) {
    this.selectedSize = variant;
  }


  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

}
