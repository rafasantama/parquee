import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoga-blog',
  templateUrl: './yoga-blog.component.html',
  styleUrls: ['./yoga-blog.component.scss']
})
export class YogaBlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blogs = [
    { 
     img:"/assets/images/yoga-img/blog/1.jpg",
     date:"5 September 2019",
     type:"admin",
     title:"Find Great Speaker For Event.",
     subTitle:"Detais This Event",
     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
    },
    { 
      img:"/assets/images/yoga-img/blog/2.jpg",
      date:"5 September 2019",
      type:"admin",
      title:"Find Great Speaker For Event.",
      subTitle:"Detais This Event",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
     },
     { 
      img:"/assets/images/yoga-img/blog/3.jpg",
      date:"5 September 2019",
      type:"admin",
      title:"Find Great Speaker For Event.",
      subTitle:"Detais This Event",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
     },
  ]

  
  blogCarouselOptions= {
    items: 3,
    margin: 60,
    nav: false,
    dots: false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 1,
            margin: 10
        },
        768: {
            items: 2,
            margin: 10
        },
        1199: {
            items: 2,
            margin: 10
        },
        1200: {
            items: 3,
            margin: 30
        },
        1600: {
            items: 3,
            margin: 30
        }
    }
}

}
