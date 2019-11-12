import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductColor, ColorFilter, Products } from '../../../../../../../shared/model/e-commerce/product.model';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  @Input() colorsFilters: ColorFilter[] = [];
  @Input() uniqueProductColor: any[];
  @Output() colorFilters: EventEmitter<ColorFilter[]> = new EventEmitter<ColorFilter[]>();

  public product: Products;
  public activeItem: any = '';

  constructor() { 
    
  }
  // Click to call function 
  public changeColor(colors: ColorFilter) {
    this.activeItem = colors.color
    if (colors.color) {
      this.colorFilters.emit([colors]);
    } else {
      this.colorFilters.emit([]);
    }
  }

  ngOnInit() { }

}
