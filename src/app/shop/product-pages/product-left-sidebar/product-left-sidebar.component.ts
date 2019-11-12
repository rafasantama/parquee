import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-product-left-sidebar',
  templateUrl: './product-left-sidebar.component.html',
  styleUrls: ['./product-left-sidebar.component.scss']
})
export class ProductLeftSidebarComponent implements OnInit {

  constructor(public productService:ProductsService) { }

  ngOnInit() {
  }
    //Close sidebar on click on outside the sidebar
    closeOverlay(){
      this.productService.filterBar = false;
    }

}
