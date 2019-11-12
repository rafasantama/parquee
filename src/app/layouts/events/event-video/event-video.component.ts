import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-event-video',
  templateUrl: './event-video.component.html',
  styleUrls: ['./event-video.component.scss']
})
export class BreadcrumbVideoComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
