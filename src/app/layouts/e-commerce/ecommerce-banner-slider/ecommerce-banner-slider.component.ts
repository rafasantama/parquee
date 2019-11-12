import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce-banner-slider',
  templateUrl: './ecommerce-banner-slider.component.html',
  styleUrls: ['./ecommerce-banner-slider.component.scss']
})
export class EcommerceBannerSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  banner = [
    {
      img: 'assets/images/ecommerce/1.jpg',
      title: 'Big collection',
      description: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
      btn: 'Collection',
      link: '/e-commerce/left-sidebar/collection/new'
    },
    {
      img: 'assets/images/ecommerce/2.jpg',
      title: 'Exclusive Offer',
      description: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
      btn: 'Offer',
      link: '/e-commerce/left-sidebar/collection/trending'
    }
  ]

  ecombannerOptions = {
    items: 1,
    nav: true,
    navClass: ['owl-prev', 'owl-next'],
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    dots: false,
    autoplay: true,
    slideSpeed: 300,
    loop: true
  }

  offers = [
    {
      img: 'assets/images/inner-page/collection/3.jpg'
    },
    {
      img: 'assets/images/inner-page/collection/5.jpg'
    },
    {
      img: 'assets/images/inner-page/collection/6.jpg'
    }
  ]


}