import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-sponsor',
  templateUrl: './event-sponsor.component.html',
  styleUrls: ['./event-sponsor.component.scss']
})
export class EventSponsorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lideran=[
    {
      img: 'assets/images/event/sponsor/lideran1.png'
    },
    {
      img: 'assets/images/event/sponsor/lideran2.png'
    }
]
apoyan=[
  {
    img: 'assets/images/event/sponsor/apoyan1.png'
  }
]

}
