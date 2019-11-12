import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-schedule',
  templateUrl: './resume-schedule.component.html',
  styleUrls: ['./resume-schedule.component.scss']
})
export class ResumeScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
schedule = [
  {
    name:'MASTER IN WEBDESIGN',
    img:'assets/images/resume/icon/icon-resume.png',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    toTime: '08:00',
    endTime: '10:00'
  },
  {
    name:'LATEST ANIMATION',
    img:'assets/images/resume/icon/icon-resume.png',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    toTime: '08:00',
    endTime: '10:00'
  },
  {
    name:'ADVANCE DEGREE',
    img:'assets/images/resume/icon/icon-resume.png',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    toTime: '08:00',
    endTime: '10:00'
  },
  {
    name:'LATEST ANIMATION',
    img:'assets/images/resume/icon/icon-resume.png',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    toTime: '08:00',
    endTime: '10:00'
  }
]
}
