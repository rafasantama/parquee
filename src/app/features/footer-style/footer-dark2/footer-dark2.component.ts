import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-footer-dark2',
  templateUrl: './footer-dark2.component.html',
  styleUrls: ['./footer-dark2.component.scss']
})
export class FooterDark2Component implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
