import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {

  constructor(public productsService:ProductsService) { }
  
  // collapse toggle
  ngOnInit() {  }

  // For mobile view
  public mobileFilterBack() {  }
 
  toggleFilter(){
    this.productsService.filterBar = !this.productsService.filterBar
  }
   
}
