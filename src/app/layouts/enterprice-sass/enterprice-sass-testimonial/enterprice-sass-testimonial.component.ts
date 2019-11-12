import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-enterprice-sass-testimonial',
  templateUrl: './enterprice-sass-testimonial.component.html',
  styleUrls: ['./enterprice-sass-testimonial.component.scss']
})
export class EnterpriceSassTestimonialComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  testimonialcarousel = [
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
  
  testimonialcarouselOptions= {
    items: 1,
    loop: true,
    margin: 10,
    nav: false
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
