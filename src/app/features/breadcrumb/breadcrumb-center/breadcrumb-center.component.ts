import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-breadcrumb-center',
  templateUrl: './breadcrumb-center.component.html',
  styleUrls: ['./breadcrumb-center.component.scss']
})
export class BreadcrumbCenterComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');

  }

}
