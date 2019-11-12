import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-light-header',
  templateUrl: './light-header.component.html',
  styleUrls: ['./light-header.component.scss']
})
export class LightHeaderComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-7');
  }

}
