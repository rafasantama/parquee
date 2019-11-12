import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-footer-dark',
  templateUrl: './footer-dark.component.html',
  styleUrls: ['./footer-dark.component.scss']
})
export class FooterDarkComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
