import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprice-about',
  templateUrl: './enterprice-about.component.html',
  styleUrls: ['./enterprice-about.component.scss']
})
export class enterpriceAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter = [
    { 
     img:"assets/images/app_landing1/about/Ellipse-3-copy.png",
     count: 7576,
     text: 'happy clients'
    },
    { 
      img:"assets/images/app_landing1/about/close.png",
      count: 402,
      text: 'Tickets Closed'
     },
     { 
      img:"assets/images/app_landing1/about/love.png",
      count: 8899,
      text: 'Followers'
     },
     { 
      img:"assets/images/app_landing1/about/coffee.png",
      count: 85,
      text: 'Cups of Coffee'
     },
    
  ]
}
