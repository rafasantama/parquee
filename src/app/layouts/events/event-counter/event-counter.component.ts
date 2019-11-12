import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-counter',
  templateUrl: './event-counter.component.html',
  styleUrls: ['./event-counter.component.scss']
})
export class EventCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter = [
    {
      count:'22',
      img:'assets/images/event/counter/jobs.png',
      type:'Empleos Generados'
    },
    {
      count:'500',
      img:'assets/images/event/counter/sells.png',
      type:'Ventas Alcanzadas'
    },
    {
      count:'265',
      img:'assets/images/event/counter/startup.png',
      type:'Empresas Acompañadas'
    },
    {
      count:'17',
      img:'assets/images/event/counter/meet.png',
      type:'Top 20 Ranking UBI Global'
    }]
}
