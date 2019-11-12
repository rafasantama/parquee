import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-breadcrumb-dark',
  templateUrl: './breadcrumb-dark.component.html',
  styleUrls: ['./breadcrumb-dark.component.scss']
})
export class BreadcrumbDarkComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
