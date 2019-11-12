import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../../../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(public productsService:ProductsService) { }
  
  // collapse toggle
  ngOnInit() {  }

  // For mobile view
  public mobileFilterBack() {  }
 
  toggleFilter(){
    this.productsService.filterBar = !this.productsService.filterBar
  }
   
}
