import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-breadcrumb-bg',
  templateUrl: './breadcrumb-bg.component.html',
  styleUrls: ['./breadcrumb-bg.component.scss']
})
export class BreadcrumbBgComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
