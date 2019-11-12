import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprice-sass-price',
  templateUrl: './enterprice-sass-price.component.html',
  styleUrls: ['./enterprice-sass-price.component.scss']
})
export class EnterpriceSassPriceComponent implements OnInit {

  public val:boolean=true;

  constructor() { }

  ngOnInit() {
  }
  
  priceCarouselOptions= {
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
        576: {
            items: 1
        },
        768: {
            items: 2,
            margin: 20
        },
        992: {
            items: 3
        }
    }
  }

  price=[
    { 
      heading:"free",
      price:"$0",
      features1:"1 User Account",
      features2:"10 User Account",
      features3:"Unlimited Emails Account",
      features4:"Set and Manage",
      det1:'API & extension support',
      det2:'Development Support',
      det3:'A/B Testing',
      btn:"Sign Up",
      img: "assets/images/app_landing1/pricing/11.png" 
    },
    { 
      heading:"Pro",
      price:"$49",
      features1:"50 User Account",
      features2:"500 User Account",
      features3:"Unlimited Emails Account",
      features4:"Set and Manage",
      det1:'API & extension support',
      det2:'Development Support',
      det3:'A/B Testing',
      btn:"Sign Up",
      img: "assets/images/app_landing1/pricing/11.png" 
    },
    { 
      heading:"Ultra",
      price:"$99",
      features1:"Unlimited User Account",
      features2:"Unlimited User Account",
      features3:"Unlimited Emails Account",
      features4:"Set and Manage",
      det1:'API & extension support',
      det2:'Development Support',
      det3:'A/B Testing',
      btn:"Sign Up",
      img: "assets/images/app_landing1/pricing/11.png" 
    }

  ]

  monthly(){
    this.val=!this.val;
  }

}
