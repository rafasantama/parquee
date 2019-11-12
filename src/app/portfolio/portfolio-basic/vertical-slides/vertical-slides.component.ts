import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-vertical-slides',
  templateUrl: './vertical-slides.component.html',
  styleUrls: ['./vertical-slides.component.scss']
})
export class VerticalSlidesComponent implements OnInit {

  @ViewChild('owlCar', {static: true})pRef;

  constructor() { }

  ngOnInit() {
  }

  carouselData = [
    {
      img: 'assets/images/portfolio/multiple-carousel/2.jpg'
    },
    {
      img: 'assets/images/portfolio/multiple-carousel/3.jpg'
    },
    {
      img: 'assets/images/portfolio/multiple-carousel/4.jpg'
    },
    {
      img: 'assets/images/portfolio/multiple-carousel/5.jpg'
    }
  ]

  centerdslideOption={
    items: 1,
    nav: false,
    margin: 0,
    slideSpeed: 1000,
    paginationSpeed: 1000,
    dots: true,
    loop: false,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        460: {
            items: 1
        },
        480: {
            items: 1
        },
        576: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
  }

  slideTo(event)
  {
    if(event.deltaY > 0)
    {
      this.pRef.next()
    }
    else
    {
      this.pRef.prev()
    }
  }
}
