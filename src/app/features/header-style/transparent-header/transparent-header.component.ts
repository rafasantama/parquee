import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-transparent-header',
  templateUrl: './transparent-header.component.html',
  styleUrls: ['./transparent-header.component.scss']
})
export class TransparentHeaderComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-8');
  }

}
