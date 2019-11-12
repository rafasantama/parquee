import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-enterprice-sass-build',
  templateUrl: './enterprice-sass-build.component.html',
  styleUrls: ['./enterprice-sass-build.component.scss']
})
export class EnterpriceSassBuildComponent implements OnInit {
  @ViewChild('owlCar', { static: false }) nameInputRef: ElementRef;
  activeSlides: SlidesOutputData;

  constructor() { }

  ngOnInit() {
  }

  buildsync = [
    {
      img: "assets/images/saas1/work.png"
    },
    {
      img: "assets/images/saas1/work.png"
    },
    {
      img: "assets/images/saas1/work.png"
    }
  ]
  navsync = [
    {
      data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      data: 'Lorem Ipsum is simply dummy text of the printing and typesetting '
    },
    {
      data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and'
    }
  ]
  slidesPerPage = 1;
  sync1 = {
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }

  sync2 = {
    items: this.slidesPerPage,
    dots: true,
    nav: false,
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: this.slidesPerPage,
    responsiveRefreshRate: 100
  }

  getData(data: SlidesOutputData) {
    this.activeSlides = data;
  }

  slideTo(data) {
    this.activeSlides = data;
  }
}
