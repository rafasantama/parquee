import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-footer-dark3',
  templateUrl: './footer-dark3.component.html',
  styleUrls: ['./footer-dark3.component.scss']
})
export class FooterDark3Component implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
