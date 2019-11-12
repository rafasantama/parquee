import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter1 = [
    {
      count:'14',
      img:'assets/images/resume/icon/1.png',
      type:'Satisfied Customers'
    },
    {
      count:'54',
      img:'assets/images/resume/icon/2.png',
      type:'Total Speaker'
    },
    {
      count:'560',
      img:'assets/images/resume/icon/3.png',
      type:'Hours Worked'
    },
    {
      count:'9635',
      img:'assets/images/resume/icon/4.png',
      type:'Awwards Winning'
    }]

    counter2 = [
      {
        count:'1510',
        img:'assets/images/gym/counter/happy-icon.png',
        type:'Satisfied Customers'
      },
      {
        count:'1510',
        img:'assets/images/gym/counter/project-icon.png',
        type:'Projects Completed'
      },
      {
        count:'1510',
        img:'assets/images/gym/counter/work-icon.png',
        type:'Hours Worked'
      },
      {
        count:'1510',
        img:'assets/images/gym/counter/award-icon.png',
        type:'Awwards Winning'
      }]

    counter3 = [
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
    counter4 = [
      {
        count:'22',
        img:'assets/images/event/counter/1.png',
        type:'Total Topics'
      },
      {
        count:'500',
        img:'assets/images/event/counter/2.png',
        type:'TOTAL SPEAKER'
      },
      {
        count:'265',
        img:'assets/images/event/counter/3.png',
        type:'TOTAL EVENT'
      },
      {
        count:'5698',
        img:'assets/images/event/counter/4.png',
        type:'TOTAL ATTENDANCE'
      }]
  

}
