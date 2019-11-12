import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../../shared/model/e-commerce/product.model';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-ecommerce-product-slider',
  templateUrl: './ecommerce-product-slider.component.html',
  styleUrls: ['./ecommerce-product-slider.component.scss']
})
export class EcommerceProductSliderComponent implements OnInit {
  @Input() products: Products;
  public product: Products = {};
  closeResult: string;
  public selectedSize: any = '';
  public counter: number = 1;

  constructor(public productsService: ProductsService) { }

  ngOnInit() { }

  productSliderOptions = {
    items: 5,
    margin: 30,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      992: {
        items: 4
      },
      1000: {
        items: 5,
        margin: 30
      }
    }
  }

}
