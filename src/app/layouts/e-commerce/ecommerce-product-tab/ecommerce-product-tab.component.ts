import { Component, OnInit } from '@angular/core';
import { Products, ColorFilter, TagFilter } from '../../../shared/model/e-commerce/product.model';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-ecommerce-product-tab',
  templateUrl: './ecommerce-product-tab.component.html',
  styleUrls: ['./ecommerce-product-tab.component.scss']
})
export class EcommerceProductTabComponent implements OnInit {
  public products     :   Products[] = [];
  public activeCategory      : string = 'all';

  constructor(private productsService: ProductsService) { 
        this.getCategoryProduct(this.activeCategory);
  }

  ngOnInit() {
  }

  getCategoryProduct(category){
    this.productsService.getProductByCategory(category).subscribe(products => {           
      this.products = products.slice(0,8)
   })
   this.activeCategory = category
  }

}
