import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoga-brand',
  templateUrl: './yoga-brand.component.html',
  styleUrls: ['./yoga-brand.component.scss']
})
export class YogaBrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  brands = [
    { img: "assets/images/yoga-img/brand/1.png" },
    { img: "assets/images/yoga-img/brand/2.png" },
    { img: "assets/images/yoga-img/brand/3.png" },
    { img: "assets/images/yoga-img/brand/4.png" },
    { img: "assets/images/yoga-img/brand/1.png" }
  ]
  
  brandcarouselOptions= {
    items: 5,
    margin: 80,
    autoHeight: true,
    nav: false,
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
            items: 1,
            margin: 10
        },
        480: {
            items: 3
        },
        576: {
            items: 2
        },
        768: {
            items: 4
        },
        991: {
            items: 5
        },
        1000: {
            items: 5
        }
    }
  }
}
