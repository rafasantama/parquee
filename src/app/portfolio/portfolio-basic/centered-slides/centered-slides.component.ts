import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centered-slides',
  templateUrl: './centered-slides.component.html',
  styleUrls: ['./centered-slides.component.scss']
})
export class CenteredSlidesComponent implements OnInit {

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
    items: 3,
    nav: false,
    margin: 0,
    navText: ['<img src="assets/images/music/gallery/gallery-icon/left.png">', '<img src="assets/images/music/gallery/gallery-icon/right.png">'],
    autoplay: true,
    center: true,
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
            items: 3
        }
    }
  }
}
