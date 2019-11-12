import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-enterprice-screenshots',
  templateUrl: './enterprice-screenshots.component.html',
  styleUrls: ['./enterprice-screenshots.component.scss']
})
export class enterpriceScreenshotsComponent implements OnInit {

public index: any;

  constructor() { }

  ngOnInit() {  }

  public config: SwiperConfigInterface = {
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 4,
        initialSlide: 2,
        keyboard: true,
        mousewheel: false,
        preventClicks: false,
        preventClicksPropagation: false,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.43,
            slideShadows: false
        },
        breakpoints: {
            1199: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            991: {
                slidesPerView: 4
            },
            767: {
                slidesPerView: 3
            },
            575: {
                slidesPerView: 2
            }
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination'
        }
  };

  public slides = [
    { img: 'assets/images/app_landing1/screen-shot/1.png'},
    { img: 'assets/images/app_landing1/screen-shot/2.png'},
    { img: 'assets/images/app_landing1/screen-shot/3.png'},
    { img: 'assets/images/app_landing1/screen-shot/4.png'},
  ]
}
