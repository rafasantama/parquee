import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  testimonialcarousel1 = [
    { 
      quote:"assets/images/saas1/testimonail-dot.png",
      review:"Life before Company was very chaotic — we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.",
      userImg:"assets/images/saas1/testi-profile.png",
      userName:"Elmer Harvy",
      position:"Graphics Designer"    
    },  
    { 
      quote:"assets/images/saas1/testimonail-dot.png",
      review:"Life before Company was very chaotic — we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.",
      userImg:"assets/images/saas1/testi-profile.png",
      userName:"Elmer Harvy",
      position:"Graphics Designer"     
    },
    { 
      quote:"assets/images/saas1/testimonail-dot.png",
      review:"Life before Company was very chaotic — we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.",
      userImg:"assets/images/saas1/testi-profile.png",
      userName:"Elmer Harvy",
      position:"Graphics Designer"     
    }
  ]
  
  testimonialcarouselOptions1= {
    items: 1,
    loop: true,
    margin: 10,
    nav: false
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  testimonialcarousel2 = [
    { 
      img:"assets/images/event/testimonial/L3-1.png"
    },
    {
      img:"assets/images/event/testimonial/L3-1.png"
    }
  ]
  
  testimonialCarouselOptions2= {
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

  testimonialcarousel3 = [
    { img: "assets/images/app_landing2/team/1.png",
      name: "Ashekur Rahman",
      designation: "Art Dirrector",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the"
    },
    {
      img: "assets/images/app_landing2/team/2.png",
      name: "Ashekur Rahman",
      designation: "Art Dirrector",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the"
    },
    { 
      img: "assets/images/app_landing2/team/3.png",
      name: "Ashekur Rahman",
      designation: "Art Dirrector",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the"
    }
  ]
  
  teamcarouselOptions3= {
    items: 5,
    margin: 30,
    autoHeight: true,
    nav: false,
    dots:false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2,
            margin: 10
        },
        991: {
            items: 3,
            margin: 10
        }
    }
  }

  testimonialcarousel4 = [
    { 
      img:"assets/images/gym/testimonial/quote.png"
    },
    {
      img:"assets/images/gym/testimonial/quote.png"
    }
  ]
  
  testimonialCarouselOptions4= {
    items: 1,
    margin: 0,
    dots: true,
    nav: false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true
  }

  testimonialcarousel5 = [
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
  
  testimonialCarouselOptions5= {
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
