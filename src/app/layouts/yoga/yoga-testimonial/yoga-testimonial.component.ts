import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoga-testimonial',
  templateUrl: './yoga-testimonial.component.html',
  styleUrls: ['./yoga-testimonial.component.scss']
})
export class YogaTestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testimonials=[
    {
      img:"assets/images/yoga-img/testimonial/testimonial-img.png"
    },
    {
      img:"assets/images/yoga-img/testimonial/testimonial-img.png"
    }
  ]

  testimonalCarousel={
        items: 1,
        margin: 0,
        dots: true,
        nav: false,
        autoplay: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true
  }
}
