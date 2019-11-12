import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-carousel',
  templateUrl: './multiple-carousel.component.html',
  styleUrls: ['./multiple-carousel.component.scss']
})
export class MultipleCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  centerdSlide=[
    {
      img:'img1',
      title:"exclusive portfolio",
      year:"2019",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      img:'img2',
      title:"exclusive portfolio",
      year:"2019",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      img:'img3',
      title:"exclusive portfolio",
      year:"2019",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      img:'img4',
      title:"exclusive portfolio",
      year:"2019",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      img:'img5',
      title:"exclusive portfolio",
      year:"2019",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    }
]

centerdslideOption={
  items: 4,
  nav: false,
  autoplay: false,
  slideSpeed: 300,
  paginationSpeed: 400,
  dots: false,
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
      460: {
          items: 2
      },
      480: {
          items: 3
      },
      576: {
          items: 3
      },
      1000: {
          items: 4
      }
  }
}
}
