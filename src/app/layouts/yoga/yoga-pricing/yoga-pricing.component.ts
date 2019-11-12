import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoga-pricing',
  templateUrl: './yoga-pricing.component.html',
  styleUrls: ['./yoga-pricing.component.scss']
})
export class YogaPricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prices=[
    { heading:"Basic",
      price:"$5",
      features1:"Up To 1 Exports",
      features2:"Limited Coustomization",
      features3:"30 day Validity",
      btn:"purchase",
      img: "assets/images/yoga-img/abs-yoga.png" 
    },
    { heading:"Standard",
      price:"$10",
      features1:"Up To 1 Exports",
      features2:"Limited Coustomization",
      features3:"30 day Validity",
      btn:"purchase",
      img: "assets/images/yoga-img/abs-yoga.png" 
    },
    { heading:"Advance",
      price:"$15",
      features1:"Up To 1 Exports",
      features2:"Limited Coustomization",
      features3:"30 day Validity",
      btn:"purchase",
      img: "assets/images/yoga-img/abs-yoga.png" 
    }
  ]

  priceCarousel={
        items: 3,
        autoHeight: true,
        nav: false,
        dots:true,
        autoplay: false,
        center: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
                margin:10
            },
            576: {
                items: 2,
                margin:10
            },
            767: {
                items: 2,
                margin:10
            },
            991: {
                items: 2,
                margin:30
            },
            1000: {
                items: 3
            }
        } 
  }

}
