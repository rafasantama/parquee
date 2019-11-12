import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-counter',
  templateUrl: './agency-counter.component.html',
  styleUrls: ['./agency-counter.component.scss']
})
export class AgencyCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter = [
    { 
     img:"assets/images/agency/counter/1.png",
     count: 2556,
     text: 'days worked'
    },
    { 
      img:"assets/images/agency/counter/2.png",
      count: 306,
      text: 'Project Finished'
     },
     { 
      img:"assets/images/agency/counter/3.png",
      count: 485,
      text: 'Cofee Cup'
     },
     { 
      img:"assets/images/agency/counter/4.png",
      count: 568,
      text: 'Happy Clients'
     },
    
  ]
  

}
