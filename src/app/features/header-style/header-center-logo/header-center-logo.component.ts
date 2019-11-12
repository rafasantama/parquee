import { Component, OnInit } from '@angular/core';
import { NavService, Menu } from '../../../shared/service/nav.service';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-header-center-logo',
  templateUrl: './header-center-logo.component.html',
  styleUrls: ['./header-center-logo.component.scss']
})
export class HeaderCenterLogoComponent implements OnInit {

  public allMenuItems: Menu[];
  public firstHalfMenu: Menu[];
  public secondHalfMenu: Menu[];
  public index: number;
  math = Math;

  constructor(public navServices: NavService, public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-10');
  }

  yogas = [
    {
      img: "assets/images/yoga-img/girl-1050x640.png",
      des1: "right way",
      des2: "yoga",
      des3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      btn: "read more"
    },
    {
      img: "assets/images/yoga-img/girl-1050x640.png",
      des1: "right way",
      des2: "yoga",
      des3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      btn: "read more"
    }
  ]

  yogaCarouselOptions = {
    items: 1,
    margin: 0,
    autoHeight: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    dots: false
  }
}
