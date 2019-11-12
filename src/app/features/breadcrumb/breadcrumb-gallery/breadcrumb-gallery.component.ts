import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-breadcrumb-gallery',
  templateUrl: './breadcrumb-gallery.component.html',
  styleUrls: ['./breadcrumb-gallery.component.scss']
})
export class BreadcrumbGalleryComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
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
