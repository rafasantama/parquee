import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../shared/service/color-scss.service'
import { ProductsService } from '../../shared/service/e-commerce/products.service';
import { Products } from '../../shared/model/e-commerce/product.model';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {

  public products: Products[] = [];

  constructor(public colorPicker: ColorScssService, private productsService: ProductsService, private route: ActivatedRoute,
    private title: Title) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-7');
    this.title.setTitle(this.route.snapshot.data['title']);
    this.productsService.getProducts().subscribe(product => this.products = product);
  }

}
