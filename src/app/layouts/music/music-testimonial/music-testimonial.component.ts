import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-testimonial',
  templateUrl: './music-testimonial.component.html',
  styleUrls: ['./music-testimonial.component.scss']
})
export class MusicTestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testimoials=[
    {
      img:" assets/images/music/testimonial/quote.png",
      review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      name:"Alan Licker",
      designation:"CEO OF SC."
    },
    {
      img:" assets/images/music/testimonial/quote.png",
      review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      name:"Alan Licker",
      designation:"CEO OF SC."
    }
  ]

  testimoialCarouselOptions={
    items: 1,
    margin: 0,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true
  }
}
