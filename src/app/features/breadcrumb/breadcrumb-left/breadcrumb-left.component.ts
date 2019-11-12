import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-breadcrumb-left',
  templateUrl: './breadcrumb-left.component.html',
  styleUrls: ['./breadcrumb-left.component.scss']
})
export class BreadcrumbLeftComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
