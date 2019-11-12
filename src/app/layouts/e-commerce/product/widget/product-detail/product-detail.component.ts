import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public url : any; 

  constructor(public productService:ProductsService) {
  
   }

  ngOnInit() {
  }

  //Close sidebar on click on outside the sidebar
  closeOverlay(){
    this.productService.filterBar = false;
  }

}
