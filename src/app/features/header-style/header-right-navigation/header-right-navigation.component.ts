import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service' 

@Component({
  selector: 'app-header-right-navigation',
  templateUrl: './header-right-navigation.component.html',
  styleUrls: ['./header-right-navigation.component.scss']
})
export class HeaderRightNavigationComponent implements OnInit {

  constructor(public colorPicker : ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-1');
  }

}
