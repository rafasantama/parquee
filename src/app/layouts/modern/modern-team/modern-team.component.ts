import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-team',
  templateUrl: './modern-team.component.html',
  styleUrls: ['./modern-team.component.scss']
})
export class ModernTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  teams = [
    { img: "assets/images/app_landing2/team/1.png",
      name: "Ashekur Rahman",
      designation: "Art Dirrector",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the"
    },
    {
      img: "assets/images/app_landing2/team/2.png",
      name: "Ashekur Rahman",
      designation: "Art Dirrector",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the"
    },
    { 
      img: "assets/images/app_landing2/team/3.png",
      name: "Ashekur Rahman",
      designation: "Art Dirrector",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the"
    }
  ]
  
  teamcarouselOptions= {
    items: 5,
    margin: 30,
    autoHeight: true,
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
            items: 3,
            margin: 10
        }
    }
  }

}
