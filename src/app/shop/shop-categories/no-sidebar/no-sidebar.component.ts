import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Products, ColorFilter, TagFilter } from '../../../shared/model/e-commerce/product.model';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-no-sidebar',
  templateUrl: './no-sidebar.component.html',
  styleUrls: ['./no-sidebar.component.scss']
})
export class NoSidebarComponent implements OnInit {
  public products     :   Products[] = [];
  public items        :   Products[] = [];
  public sortByOrder  :   string = '';   // sorting

  lastKey = ''      // key to offset next query from
  finished = false  // boolean when end of data is reached
  
  constructor(private route: ActivatedRoute, private router: Router,
    private productsService: ProductsService) { 
       this.route.params.subscribe(params => {
          const category = params['category'];
          this.productsService.getProductByCategory(category).subscribe(products => {           
             this.products = products.slice(0,8)
          })          
       });
    }

  ngOnInit() {    }
  
  public listView: boolean = false;

  //Grid 4
  public col_xl_3: boolean = true;

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
    // sorting type ASC / DESC / A-Z / Z-A etc.
    public onChangeSorting(val) {
      this.sortByOrder = val;
   }
 
}
