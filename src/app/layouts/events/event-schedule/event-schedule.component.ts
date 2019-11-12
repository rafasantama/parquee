import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-schedule',
  templateUrl: './event-schedule.component.html',
  styleUrls: ['./event-schedule.component.scss']
})
export class EventScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  schedule = [
    {
      name: 'Vicky Smith',
      totime: '08:00',
      endtime: '10:00',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
      icon:'assets/images/event/icon.png'
    },
    {
      name: 'Sam Rowling',
      totime: '08:00',
      endtime: '10:00',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
      icon:'assets/images/event/icon.png'
    },
    {
      name: 'Vicky Smith',
      totime: '08:00',
      endtime: '10:00',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
      icon:'assets/images/event/icon.png'
    },
    {
      name: 'Sam Rowling',
      totime: '08:00',
      endtime: '10:00',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
      icon:'assets/images/event/icon.png'
    }
  ]

}
