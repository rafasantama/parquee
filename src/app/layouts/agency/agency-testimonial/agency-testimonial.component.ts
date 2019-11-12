import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-testimonial',
  templateUrl: './agency-testimonial.component.html',
  styleUrls: ['./agency-testimonial.component.scss']
})
export class AgencyTestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users = [
    { 
      img:"assets/images/agency/testimonial/1.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top."
    },
    { 
      img:"assets/images/agency/testimonial/2.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top."
    },
    { 
      img:"assets/images/agency/testimonial/1.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top."
    },
    { 
      img:"assets/images/agency/testimonial/2.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top."
    }
  ]
  
  testimonialCarouselOptions= {
    items: 3,
    margin: 65,
    nav: true,
    dots: false,
    navText: ['<img src="/assets/images/agency/testimonial/left.png">', '<img src="/assets/images/agency/testimonial/right.png">'],
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        575: {
            items:2,
            margin: 10
        },
        991: {
            items: 2,
            margin: 30
        },
        1199: {
            items: 3,
            margin: 30
        }
    }
  }


}
