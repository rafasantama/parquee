import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprice-sass-feature',
  templateUrl: './enterprice-sass-feature.component.html',
  styleUrls: ['./enterprice-sass-feature.component.scss']
})
export class EnterpriceSassFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  features= [
    {
      title:'Responsive',
      subTitle: 'Layout',
      description: 'Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists',
      img: 'assets/images/saas1/feature/1.png',
    },
    {
      title:'Sass Landing',
      subTitle: 'Page',
      description: 'Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists',
      img: 'assets/images/saas1/feature/2.png',
    },
    {
      title:'Easy',
      subTitle: 'Integration',
      description: 'Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists',
      img: 'assets/images/saas1/feature/3.png',
    },
    {
      title:'Smart',
      subTitle: 'Responsive',
      description: 'Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists',
      img: 'assets/images/saas1/feature/4.png',
    },
    {
      title:'Smart And',
      subTitle: 'optimized',
      description: 'Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists',
      img: 'assets/images/saas1/feature/5.png',
    },
    {
      title:'Well',
      subTitle: 'Documented',
      description: 'Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists',
      img: 'assets/images/saas1/feature/6.png',
    }
  ]
}
