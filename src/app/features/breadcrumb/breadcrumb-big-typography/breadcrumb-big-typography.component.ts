import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-breadcrumb-big-typography',
  templateUrl: './breadcrumb-big-typography.component.html',
  styleUrls: ['./breadcrumb-big-typography.component.scss']
})
export class BreadcrumbBigTypographyComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
