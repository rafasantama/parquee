import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-footer-light2',
  templateUrl: './footer-light2.component.html',
  styleUrls: ['./footer-light2.component.scss']
})
export class FooterLight2Component implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
