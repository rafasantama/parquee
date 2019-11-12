import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductTags, TagFilter } from '../../../../shared/model/e-commerce/product.model';

declare var $: any;

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  
  @Input() tagsFilters: ProductTags[] = [];
  @Output() tagFilters: EventEmitter<ProductTags[]> = new EventEmitter<ProductTags[]>();

  // Array
  public checkedTagsArray: any[] = [];

  constructor() { }

  // value checked call this function
  checkedFilter(event) {
    let index = this.checkedTagsArray.indexOf(event.target.value);  // checked and unchecked value
    if (event.target.checked)
      this.checkedTagsArray.push(event.target.value); // push in array cheked value
    else
      this.checkedTagsArray.splice(index, 1);  // removed in array unchecked value           
  }
  ngOnInit() {
    this.tagFilters.emit(this.checkedTagsArray);   // Pass value Using emit 
  }

  

}
