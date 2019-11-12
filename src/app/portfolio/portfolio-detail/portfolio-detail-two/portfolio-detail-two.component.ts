import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-detail-two',
  templateUrl: './portfolio-detail-two.component.html',
  styleUrls: ['./portfolio-detail-two.component.scss']
})
export class PortfolioDetailTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  banner = [
    { img: 'assets/images/inner-page/blogs/1.jpg' },
    { img: 'assets/images/inner-page/blogs/2.jpg' }
  ]

  allImages = [
    { img: 'assets/images/portfolio/1.jpg' },
    { img: 'assets/images/portfolio/2.jpg' },
    { img: 'assets/images/portfolio/3.jpg' },
    { img: 'assets/images/portfolio/4.jpg' },
    { img: 'assets/images/portfolio/5.jpg' },
    { img: 'assets/images/portfolio/6.jpg' }
  ];

  detailOneCarousel = {
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true
  }

  detailOneCarousel1 = {
    items: 6,
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
      320: {
        items: 1,
        margin: 10
      },
      480: {
        items: 2,
        margin: 10
      },
      575: {
        items: 3,
        margin: 10
      },
      991: {
        items: 4,
        margin: 30
      },
      1600: {
        items: 6
      }
    }
  }

}
