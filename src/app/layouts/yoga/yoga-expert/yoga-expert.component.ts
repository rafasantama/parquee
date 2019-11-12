import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoga-expert',
  templateUrl: './yoga-expert.component.html',
  styleUrls: ['./yoga-expert.component.scss']
})
export class YogaExpertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  experts=[
    {
      img:"assets/images/yoga-img/expert/3.jpg",
    },
    {
      img:"assets/images/yoga-img/expert/2.jpg",
    },
    {
      img:"assets/images/yoga-img/expert/4.jpg",
    },
    {
      img:"assets/images/yoga-img/expert/5.jpg",
    },
    {
      img:"assets/images/yoga-img/expert/3.jpg",
    },
    {
      img:"assets/images/yoga-img/expert/2.jpg",
    },
    {
      img:"assets/images/yoga-img/expert/2.jpg",
    },
    {
      img:"assets/images/yoga-img/expert/1.jpg",
    },
    {
      img:"assets/images/yoga-img/expert/4.jpg",
    }
  ]

  expertCarouselOptions={
    center: true,
    loop: true,
    dots: true,
    margin: 10,
    responsive: {
        0: {
            items: 2,
            margin: 10
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
  }
}
