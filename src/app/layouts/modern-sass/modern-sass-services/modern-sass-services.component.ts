import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-sass-services',
  templateUrl: './modern-sass-services.component.html',
  styleUrls: ['./modern-sass-services.component.scss']
})
export class ModernSassServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  services = [
    {
      img:'assets/images/saas2/our-feature/1.png',
      title:'Content Management',
      description:'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
    },
    {
      img:'assets/images/saas2/our-feature/2.png',
      title:'Project Analysis',
      description:'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
    },
    {
      img:'assets/images/saas2/our-feature/3.png',
      title:'Support & Service',
      description:'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
    },
    {
      img:'assets/images/saas2/our-feature/4.png',
      title:'Project Management',
      description:'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
    },
    {
      img:'assets/images/saas2/our-feature/5.png',
      title:'Get Free Update',
      description:'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
    },
    {
      img:'assets/images/saas2/our-feature/6.png',
      title:'Smart Performance',
      description:'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
    }
  ]
}
