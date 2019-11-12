import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-detail-four',
  templateUrl: './portfolio-detail-four.component.html',
  styleUrls: ['./portfolio-detail-four.component.scss']
})
export class PortfolioDetailFourComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

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

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }


}
