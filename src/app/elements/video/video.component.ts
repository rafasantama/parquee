import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
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

}
