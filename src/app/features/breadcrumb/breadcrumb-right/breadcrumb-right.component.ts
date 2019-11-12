import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-breadcrumb-right',
  templateUrl: './breadcrumb-right.component.html',
  styleUrls: ['./breadcrumb-right.component.scss']
})
export class BreadcrumbRightComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
