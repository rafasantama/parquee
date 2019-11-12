import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-blog',
  templateUrl: './agency-blog.component.html',
  styleUrls: ['./agency-blog.component.scss']
})
export class AgencyBlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blogs = [
    {
      img: "assets/images/agency/blog/blog-list-1.jpg",
      date: "June 19, 2018",
      type: "Phonics",
      title: "Alamo",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,it to make a type specimen book...............",
      btn: "read more"
    },
    {
      img: "assets/images/agency/blog/blog-list-2.jpg",
      date: "June 19, 2018",
      type: "Phonics",
      title: "Twice profit than before you",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,it to make a type specimen book...............",
      btn: "read more"
    },
    {
      img: "assets/images/agency/blog/blog-list-3.jpg",
      date: "June 19, 2018",
      type: "Phonics",
      title: "Twice profit than before you",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,it to make a type specimen book...............",
      btn: "read more"
    },
  ]

  blogCarouselOptions = {
    items: 3,
    margin: 30,
    nav: false,
    dots: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      576: {
        items: 2,
        margin: 10
      },
      991: {
        items: 3
      },
      1600: {
        items: 3
      }
    }
  }

}
