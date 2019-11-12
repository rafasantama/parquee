import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia-schedule',
  templateUrl: './historia-schedule.component.html',
  styleUrls: ['./historia-schedule.component.scss']
})
export class HistoriaScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  schedule = [
    {
      name: 'Estrategia Cultura E',
      totime: '2004',
      endtime: '2007',
      description: 'Promovia el Desarrollo de una nueva cultura emprendedora. Respondía a las necesidades y anhelos de los emprendedores de la ciudad en temas como formación, creación de empresas, financiamiento, apertura de nuevos mercados, entre otro',
      icon:'assets/images/event/culturae.jpg'
    },
    {
      name: 'Parque E',
      totime: '28 de Septiembre',
      endtime: '2006',
      description: 'De la estrategia cultura E, nace Parque E, como referente nacional y latinoamericano',
      icon:'assets/images/event/parquee.png'
    }
  ]

}
