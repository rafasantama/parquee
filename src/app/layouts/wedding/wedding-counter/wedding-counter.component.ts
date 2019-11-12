import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-counter',
  templateUrl: './wedding-counter.component.html',
  styleUrls: ['./wedding-counter.component.scss']
})
export class WeddingCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter = [
    { 
     img:"assets/images/wedding-img/icon/1.png",
     count: 100,
     text: 'Total Event'
    },
    { 
      img:"assets/images/wedding-img/icon/2.png",
      count: 3500,
      text: 'Total Guest'
     },
     { 
      img:"assets/images/wedding-img/icon/3.png",
      count: 1000,
      text: 'Invitation Card'
     },
     { 
      img:"assets/images/wedding-img/icon/4.png",
      count: 200,
      text: 'Total Car'
     },
    
  ]

}
