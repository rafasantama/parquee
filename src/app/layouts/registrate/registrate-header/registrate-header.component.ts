import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-registrate-header',
  templateUrl: './registrate-header.component.html',
  styleUrls: ['./registrate-header.component.scss']
})
export class RegistrateHeaderComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-2');
  }
  gallery = [
    {
      img: 'bg1'
    },
    {
      img: 'bg2'
    }
  ]

  galleryCarouselOptions = {
    items: 1,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 200,
    loop: true,
    dots: false,
    animateOut: 'fadeOut'
  }
}


