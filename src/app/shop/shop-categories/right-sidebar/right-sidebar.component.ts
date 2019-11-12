import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products, ColorFilter, TagFilter } from '../../../shared/model/e-commerce/product.model';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {


  public products: Products[] = [];
  public items: Products[] = [];
  public allItems: Products[] = [];
  public colorFilters: ColorFilter[] = [];
  public tagsFilters: any[] = [];
  public tags: any[] = [];
  public colors: any[] = [];
  public sortByOrder: string = '';   // sorting
  public animation: any;   // Animation

  constructor(private route: ActivatedRoute, private router: Router,
    public productsService: ProductsService) {
    this.route.params.subscribe(params => {
      const category = params['category'];
      this.productsService.getProductByCategory(category).subscribe(products => {
        this.allItems = products  // all products
        this.products = products.slice(0, 8)
        this.getTags(products)
        this.getColors(products)
      })
    });
  }

  ngOnInit() { }

  // Get current product tags
  public getTags(products) {
    var uniqueBrands = []
    var itemBrand = Array();
    products.map((product, index) => {
      if (product.tags) {
        product.tags.map((tag) => {
          const index = uniqueBrands.indexOf(tag);
          if (index === -1) uniqueBrands.push(tag);
        })
      }
    });
    for (var i = 0; i < uniqueBrands.length; i++) {
      itemBrand.push({ brand: uniqueBrands[i] })
    }
    this.tags = itemBrand
  }

  // Get current product colors
  public getColors(products) {
    var uniqueColors = []
    var itemColor = Array();
    products.map((product, index) => {
      if (product.colors) {
        product.colors.map((color) => {
          const index = uniqueColors.indexOf(color);
          if (index === -1) uniqueColors.push(color);
        })
      }
    });
    for (var i = 0; i < uniqueColors.length; i++) {
      itemColor.push({ color: uniqueColors[i] })
    }
    this.colors = itemColor
  }

  // Update price filter
  public updatePriceFilters(price: any) {
    let pricemin = price[0];
    let maxPrice = price[1];
    let items: any[] = [];
    this.products.filter((item: Products) => {
      if (item.price >= pricemin && item.price <= maxPrice) {
        items.push(item); // push in array
      }
    });
    this.items = items;
  }

  // Initialize filetr Items
  public filterItems(): Products[] {
    return this.items.filter((item: Products) => {
      const Colors: boolean = this.colorFilters.reduce((prev, curr) => { // Match Color
        if (item.colors) {
          if (item.colors.includes(curr.color)) {
            return prev && true;
          }
        }
      }, true);
      const Tags: boolean = this.tagsFilters.reduce((prev, curr) => { // Match Tags
        if (item.tags) {
          if (item.tags.includes(curr)) {
            return prev && true;
          }
        }
      }, true);
      return Colors && Tags; // return true
    });
  }


  // Update tags filter
  public updateTagFilters(tags: any[]) {
    this.tagsFilters = tags;
  }

  // Update color filter
  public updateColorFilters(colors: ColorFilter[]) {
    this.colorFilters = colors;
  }

  // sorting type ASC / DESC / A-Z / Z-A etc.
  public onChangeSorting(val) {
    this.sortByOrder = val;
  }

  public listView: boolean = false;

  //Grid 4
  public col_xl_3: boolean = false;

  //Grid 3
  public col_xl_4: boolean = false;

  //Grid 2
  public col_md_6: boolean = true;

  //List View
  public col_xl_12: boolean = false;

  public gridOptions: boolean = true;
  public active: boolean = false;

  listOpen() {
    this.gridOptions = false
    this.listView = true;
    this.col_xl_12 = true;
  }

  grid2() {
    this.gridOptions = true;
    this.col_md_6 = true;
    this.col_xl_3 = false;
    this.listView = false
    this.col_xl_4 = false;
    this.col_xl_12 = false;

  }

  grid3() {
    this.gridOptions = true;
    this.listView = false;
    this.col_xl_4 = true;
    this.col_xl_3 = false;
    this.col_md_6 = true;
    this.col_xl_12 = false;
  }

  grid4() {
    this.gridOptions = true;
    this.listView = false;
    this.col_xl_3 = true;
    this.col_md_6 = true;
    this.col_xl_4 = false;
    this.col_xl_12 = false;
  }

  toggleFilter() {
    this.productsService.filterBar = !this.productsService.filterBar
  }

  //Close sidebar on click on outside the sidebar
  closeOverlay() {
    this.productsService.filterBar = false;
  }

}
