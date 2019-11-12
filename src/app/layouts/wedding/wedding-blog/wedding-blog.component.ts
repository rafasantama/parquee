import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-blog',
  templateUrl: './wedding-blog.component.html',
  styleUrls: ['./wedding-blog.component.scss']
})
export class WeddingBlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blogs=[
    {
    img:"assets/images/wedding-img/blog/1.jpg",
    text:"The Proposal",
    date:"08/14/2015",
    place:"Newyork",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
    btn:"read more"
  },
  {
    img:"assets/images/wedding-img/blog/2.jpg",
    text:"The Proposal",
    date:"08/14/2015",
    place:"Newyork",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
    btn:"read more"
  },
  {
    img:"assets/images/wedding-img/blog/3.jpg",
    text:"The Proposal",
    date:"08/14/2015",
    place:"Newyork",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
    btn:"read more"
  }
]

blagCarouselOptions=
  {
    items: 3,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        }   ,
        1024: {
            items: 2
        }
    }
  }
}
