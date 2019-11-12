import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PriceComponent implements OnInit {
  @Output() priceFilters = new EventEmitter();

  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([100, 1000])
  });

  options: Options = {
    floor: 100,
    ceil: 1000,
    step: 5
  };

  constructor() {   }

  ngOnInit() { 
    setInterval(() => {
      this.priceFilters.emit(this.sliderForm.value.sliderControl);
    });
  }

  onUserChange(){
    this.priceFilters.emit(this.sliderForm.value.sliderControl);
  }

}
