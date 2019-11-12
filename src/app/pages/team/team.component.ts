import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  experts = [
    { 
     img:"assets/images/event/l3-1.png",
     name:"Vicky Smith",
     designation:"UI/UX Designer - Little Big"
    },
    { 
      img:"assets/images/event/l3-2.png",
      name:"Sam Rowling",
      designation:"Team Leader - otstrab"
     },
     { 
      img:"assets/images/event/l3-3.png",
      name:"Mark Tucker",
      designation:"App Developer - Jumpster"
     },
     { 
      img:"assets/images/event/l3-4.png",
      name:"Sam Rowling",
      designation:"Team Leader - otstrab"
     }
  ]

  artists = [
    { 
      img:"assets/images/music/artist/1.png",
      name:"decorner",
      musician:"musician",
    },
    { 
      img:"assets/images/music/artist/2.png",
      name:"decorner",
      musician:"musician",
    },
    { 
      img:"assets/images/music/artist/3.png",
      name:"decorner",
      musician:"musician",
    }
  ]
  
  
  artistscarouselOptions= {
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
        768: {
            items: 2
        },
        992: {
            items: 3,
            margin: 20
        },
        1600: {
            margin: 30
        }
    }
  }
  
  speakerCarouselOptions= {
    items: 3,
    margin: 55,
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
        360: {
            items: 2,
            margin: 10
        },
        480: {
            items: 3,
            margin: 10
        },
        767: {
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
