import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-product-right-sidebar',
  templateUrl: './product-right-sidebar.component.html',
  styleUrls: ['./product-right-sidebar.component.scss']
})
export class ProductRightSidebarComponent implements OnInit {

  constructor(public productService:ProductsService) { }

  ngOnInit() {
  }
  
   //Close sidebar on click on outside the sidebar
   closeOverlay(){
    this.productService.filterBar = false;
  }

}
