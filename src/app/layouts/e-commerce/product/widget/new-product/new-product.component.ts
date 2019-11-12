import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../../../../shared/model/e-commerce/product.model';
import { ProductsService } from '../../../../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  
  public products : Products[] = [];	

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => this.products = product);
  }

}
