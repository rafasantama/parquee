import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-testimonial',
  templateUrl: './wedding-testimonial.component.html',
  styleUrls: ['./wedding-testimonial.component.scss']
})
export class WeddingTestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testimonials=[
    {
      img:"assets/images/wedding-img/testimonial/quote.png",
      review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.",
      name:"Alan Lakor",
      designation:"CEO OF SC."
    },
    {
      img:"assets/images/wedding-img/testimonial/quote.png",
      review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.",
      name:"Alan Lakor",
      designation:"CEO OF SC."
    },
    {
      img:"assets/images/wedding-img/testimonial/quote.png",
      review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.",
      name:"Alan Lakor",
      designation:"CEO OF SC."
    }
]

testimonialCarouselOptions={
  items: 1,
  margin: 0,
  dots: false,
  nav: false,
  autoplay: true,
  slideSpeed: 300,
  paginationSpeed: 400,
  loop: true 
}
}
