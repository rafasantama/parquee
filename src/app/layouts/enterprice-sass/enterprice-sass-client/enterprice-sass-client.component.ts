import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprice-sass-client',
  templateUrl: './enterprice-sass-client.component.html',
  styleUrls: ['./enterprice-sass-client.component.scss']
})
export class EnterpriceSassClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clients = [
    { img: "assets/images/saas1/brand/1.png" },
    { img: "assets/images/saas1/brand/2.png" },
    { img: "assets/images/saas1/brand/3.png" },
    { img: "assets/images/saas1/brand/4.png" },
    { img: "assets/images/saas1/brand/1.png" },
    { img: "assets/images/saas1/brand/2.png" },
    { img: "assets/images/saas1/brand/3.png" },
    { img: "assets/images/saas1/brand/4.png" }
  ]
  
  clientcarouselOptions= {
    items: 8,
    margin: 80,
    autoHeight: true,
    nav: false,
    dots: false,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        320:{
            items: 2,
            margin: 20
        },
        480:{
            items: 3,
            margin: 10
        },
        576:{
            items: 4,
            margin: 0
        },
        768:{
            items: 6,
            margin: 30
        },
        992:{
            items: 7,
            margin: 30
        },
        1200: {
            items: 8,
            margin: 50
        }
    }
  }
}
