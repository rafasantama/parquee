import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-sass-pricing',
  templateUrl: './modern-sass-pricing.component.html',
  styleUrls: ['./modern-sass-pricing.component.scss']
})
export class ModernSassPricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pricing = [
    { 
      img:"assets/images/yoga-img/abs-yoga.png",
      package:"free",
      feature1:"100 MB Disk Space",
      feature2:"2 Subdomains",
      feature3:"5 Email Accounts",
      feature4:"Webmail Support",
      price:"0",
      btn:"More"
    },
    {
      img:"assets/images/yoga-img/abs-yoga.png",
      package:"Mediam",
      feature1:"100 MB Disk Space",
      feature2:"2 Subdomains",
      feature3:"5 Email Accounts",
      feature4:"Webmail Support",
      price:"49",
      btn:"purchase"
    },
    {
      img:"assets/images/yoga-img/abs-yoga.png",
      package:"Business",
      feature1:"100 MB Disk Space",
      feature2:"2 Subdomains",
      feature3:"5 Email Accounts",
      feature4:"Webmail Support",
      price:"99",
      btn:"purchase"
    }
  ]
  
  pricingcarouselOptions= {
    items: 3,
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
        992: {
            items: 3
        }
    }
  }
}
