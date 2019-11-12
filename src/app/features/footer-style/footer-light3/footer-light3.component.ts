import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-footer-light3',
  templateUrl: './footer-light3.component.html',
  styleUrls: ['./footer-light3.component.scss']
})
export class FooterLight3Component implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
