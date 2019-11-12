import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-counter',
  templateUrl: './resume-counter.component.html',
  styleUrls: ['./resume-counter.component.scss']
})
export class ResumeCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter = [
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
}
