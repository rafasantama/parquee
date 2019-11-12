import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprice-pricing',
  templateUrl: './enterprice-pricing.component.html',
  styleUrls: ['./enterprice-pricing.component.scss']
})
export class enterpricePricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  owlcarousel1 = [
    { heading:"Basic",
      price:"$5",
      features1:"Up To 1 Exports",
      features2:"Limited Coustomization",
      features3:"30 day Validity",
      btn:"purchase",
      img: "assets/images/app_landing1/pricing/11.png" 
    },
    { heading:"Standard",
      price:"$10",
      features1:"Up To 1 Exports",
      features2:"Limited Coustomization",
      features3:"30 day Validity",
      btn:"purchase",
      img: "assets/images/app_landing1/pricing/22.png" 
    },
    { heading:"Advance",
      price:"$15",
      features1:"Up To 1 Exports",
      features2:"Limited Coustomization",
      features3:"30 day Validity",
      btn:"purchase",
      img: "assets/images/app_landing1/pricing/11.png" 
    }
  ]
  
  owlcarouselOptions= {
    items: 3,
    margin: 30,
    nav: false,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        600:{
            items: 2,
            margin: 10
        },
        992: {
            items: 3
        }
    }
  }

}
