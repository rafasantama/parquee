import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-breadcrumb-video',
  templateUrl: './breadcrumb-video.component.html',
  styleUrls: ['./breadcrumb-video.component.scss']
})
export class BreadcrumbVideoComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
