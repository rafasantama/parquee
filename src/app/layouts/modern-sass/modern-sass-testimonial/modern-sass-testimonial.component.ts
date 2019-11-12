import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-sass-testimonial',
  templateUrl: './modern-sass-testimonial.component.html',
  styleUrls: ['./modern-sass-testimonial.component.scss']
})
export class ModernSassTestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  testimonial = [
    {
      img:'assets/images/event/testimonial/L3-1.png',
      msgIcon:'assets/images/event/testimonial/message.png',
      name:'Jhon Denal - ',
      designation:'UI Designer'
    },
    {
      img:'assets/images/event/testimonial/L3-1.png',
      msgIcon:'assets/images/event/testimonial/message.png',
      name:'Joy Denal - ',
      designation:'UI Designer'
    }
  ]

  testimonialcarouselOptions= {
    items: 1,
    margin: 0,
    autoHeight: true,
    nav: true,
    dots: false,
    navText: ['<img src="assets/images/music/gallery/gallery-icon/left.png">', '<img src="assets/images/music/gallery/gallery-icon/right.png">'],
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true
  }
}
