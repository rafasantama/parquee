import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-blog',
  templateUrl: './music-blog.component.html',
  styleUrls: ['./music-blog.component.scss']
})
export class MusicBlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blogs = [
    { 
     img:"assets/images/event/blog/1.jpg",
     date:"5 September 2019",
     type:"admin",
     title:"Find Great Speaker For Event.",
     subTitle:"Detais This Event",
     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
    },
    { 
      img:"assets/images/event/blog/2.jpg",
      date:"5 September 2019",
      type:"admin",
      title:"Find Great Speaker For Event.",
      subTitle:"Detais This Event",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
     },
     { 
      img:"assets/images/event/blog/3.jpg",
      date:"5 September 2019",
      type:"admin",
      title:"Find Great Speaker For Event.",
      subTitle:"Detais This Event",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
     },
  ]

  blogCarouselOptions={
        items: 3,
        margin: 60,
        nav: false,
        dots:false,
        autoplay: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
                margin: 10
            },
            991: {
                items: 2,
                margin: 10
            },
            992: {
                items: 3,
                margin: 10
            },
            1200: {
                margin: 30
            }
        }
  }
  
}
