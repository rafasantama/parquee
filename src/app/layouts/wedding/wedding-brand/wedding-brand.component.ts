import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-brand',
  templateUrl: './wedding-brand.component.html',
  styleUrls: ['./wedding-brand.component.scss']
})
export class WeddingBrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  brands=[
    {
        img:"assets/images/wedding-img/brand/1.png"
    },
    {
        img:"assets/images/wedding-img/brand/2.png"
    },
    {
        img:"assets/images/wedding-img/brand/3.png"
    },
    {
      img:"assets/images/wedding-img/brand/4.png"
    },
    {
      img:"assets/images/wedding-img/brand/5.png"
    }
]

  brandCarouselOptions={
       items: 5,
        margin: 40,
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
                margin: 40
            },
            360: {
                items: 2,
                margin: 20
            },
            480: {
                items: 3,
                margin: 30
            },
            768: {
                items: 4,
                margin: 30
            },
            1366: {
                items: 5
            }
        }
    }
}
