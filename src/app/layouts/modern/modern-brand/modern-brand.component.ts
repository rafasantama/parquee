import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-brand',
  templateUrl: './modern-brand.component.html',
  styleUrls: ['./modern-brand.component.scss']
})
export class ModernBrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  brands = [
    { img: "assets/images/app_landing2/brand/1.png" },
    { img: "assets/images/app_landing2/brand/2.png" },
    { img: "assets/images/app_landing2/brand/3.png" },
    { img: "assets/images/app_landing2/brand/4.png" },
    { img: "assets/images/app_landing2/brand/5.png" }
  ]
  
  brandcarouselOptions= {
    items: 6,
        margin: 80,
        autoHeight: true,
        nav: false,
        dots:false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            320: {
                items: 2,
                margin: 10
            },
            360: {
                items: 3,
                margin: 20
            },
            480: {
                items: 4,
                margin: 30
            },
            767: {
                items: 4,
                margin: 30
            },
            991: {
                items: 5,
                margin: 20
            },
            992: {
                item:6

            }
        }
  }
}
