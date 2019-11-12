import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-zoom-gallery',
  templateUrl: './zoom-gallery.component.html',
  styleUrls: ['./zoom-gallery.component.scss']
})
export class ZoomGalleryComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
