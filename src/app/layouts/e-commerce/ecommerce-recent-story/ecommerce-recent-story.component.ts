import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce-recent-story',
  templateUrl: './ecommerce-recent-story.component.html',
  styleUrls: ['./ecommerce-recent-story.component.scss']
})
export class EcommerceRecentStoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blog = [
    {
      img:'assets/images/agency/blog/10.jpg',
      date:'June 19, 2019',
      title:'Phonics ,Newyork',
      subTitle:'Alamo',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'   
    },
    {
      img:'assets/images/agency/blog/12.jpg',
      date:'June 19, 2019',
      title:'Phonics ,Newyork',
      subTitle:'Twice profit than before you',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'   
    },
    {
      img:'assets/images/agency/blog/23.png',
      date:'June 19, 2019',
      title:'Phonics ,Newyork',
      subTitle:'Twice profit than before you',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'   
    }
  ]

  blogCarouselOptions = {
    items: 3,
    margin: 30,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1250: {
            items: 3,
            margin: 30
        }
    }
  }
}
