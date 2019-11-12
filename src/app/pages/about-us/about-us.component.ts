import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aboutTestimonial = [
    { 
      img:"assets/images/event/testimonial/L3-1.png"
    },
    {
      img:"assets/images/event/testimonial/L3-1.png"
    }
  ]
  
  aboutTestimonialCarouselOptions= {
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
