import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../shared/service/color-scss.service' 

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(public colorPicker : ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }


}
