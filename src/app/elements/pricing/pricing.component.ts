import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pricing1 = [
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
  
  pricingcarouselOptions1= {
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

  pricing2 = [
    { 
      icon:"rocket-ship",
      package:"free",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"0",
      btn:"purchase"
    },
    {
      icon:"diamond",
      package:"Mediam",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"49",
      btn:"purchase"
    },
    {
      icon:"pie-chart",
      package:"Business",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"99",
      btn:"purchase"
    }
  ]
  
  pricingcarouselOptions2= {
    items: 3,
    margin: 30,
    nav: false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        576: {
            items: 2,
            margin: 10
        },
        991: {
            items:2,
            margin: 15
        },
        992: {
            items:3,
            margin: 15
        },
        1000: {
            items: 3
        }
    }
  }

  pricing3 = [
    { 
      icon:"rocket-ship",
      package:"free",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"0",
      btn:"purchase"
    },
    {
      icon:"diamond",
      package:"Mediam",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"49",
      btn:"purchase"
    },
    {
      icon:"pie-chart",
      package:"Business",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"99",
      btn:"purchase"
    }
  ]
  
  pricingcarouselOptions3= {
        items: 3,
        margin: 30,
        nav: false,
        autoplay: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            576: {
                items: 2,
                margin: 10
            },
            991: {
                items:2,
                margin: 15
            },
            992: {
                items:3,
                margin: 15
            },
            1000: {
                items: 3
            }
        }
  }

  pricing4 = [
    { 
      icon:"rocket-ship",
      package:"free",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"0",
      btn:"purchase"
    },
    {
      icon:"diamond",
      package:"Silver",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"50",
      btn:"purchase"
    },
    {
      icon:"pie-chart",
      package:"Business",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"100",
      btn:"purchase"
    }
  ]
  
  pricingcarouselOptions4= {
            items: 3,
            margin: 50,
            nav: false,
            autoplay: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            loop: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 10
                },
                600: {
                    items: 2,
                    margin: 10
                },
                1000: {
                    items: 3,
                    margin: 10
                }
            }
  }

  pricing5 = [
    { 
      icon:"rocket-ship",
      package:"free",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"0",
      btn:"purchase"
    },
    {
      icon:"diamond",
      package:"Gold Plan",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"49",
      btn:"purchase"
    },
    {
      icon:"pie-chart",
      package:"Silver Plan",
      feature1:"Easy Installations",
      feature2:"Unlimited support",
      feature3:"Free Forever",
      price:"99",
      btn:"purchase"
    }
  ]
  
  pricingcarouselOptions5= {
    items: 3,
    margin: 30,
    nav: false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        480: {
            items: 2,
            margin: 10
        },
        992: {
            items: 3,
            margin: 10
        }
    }
  }

  price6 = [
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

 
  priceCarouselOptions6= {
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

  pricing7 = [
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
      btn:"more"
    },
    {
      img:"assets/images/yoga-img/abs-yoga.png",
      package:"Business",
      feature1:"100 MB Disk Space",
      feature2:"2 Subdomains",
      feature3:"5 Email Accounts",
      feature4:"Webmail Support",
      price:"99",
      btn:"more"
    }
  ]
  
  pricingcarouselOptions7= {
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
