import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoga-header',
  templateUrl: './yoga-header.component.html',
  styleUrls: ['./yoga-header.component.scss']
})
export class YogaHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    yogas=[
      {
        img:"assets/images/yoga-img/girl-1050x640.png",
        des1:"right way",
        des2:"yoga",
        des3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        btn:"read more"
      },
      {
        img:"assets/images/yoga-img/girl-1050x640.png",
        des1:"right way",
        des2:"yoga",
        des3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        btn:"read more"
      }
    ]

    yogaCarouselOptions={
      items: 1,
      margin: 0,
      autoHeight: true,
      nav: true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      autoplay: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      dots: false
    }
}
