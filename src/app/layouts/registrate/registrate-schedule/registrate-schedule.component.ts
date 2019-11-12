import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrate-schedule',
  templateUrl: './registrate-schedule.component.html',
  styleUrls: ['./registrate-schedule.component.scss']
})
export class RegistrateScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  schedule = [
    {
      name: '1. Inscripción:',
      totime: 'Enero',
      endtime: 'Marzo',
      description: 'Inscribe tu emprendimiento en el banco de iniciativas empresariales.',
      icon:'assets/images/event/pasos/paso1.png'
    },
    {
      name: '2. Verificación',
      totime: '28 de Septiembre',
      endtime: '2006',
      description: 'Se seleccionan los proyectos en conocimiento con alto potencial de crecimiento.',
      icon:'assets/images/event/pasos/paso2.png'
    },
    {
      name: '3. Entrevista',
      totime: '28 de Septiembre',
      endtime: '2006',
      description: 'Los emprendedores serán entrevistados por el equipo de consultores y se determinará un puntaje. Los emprendimientos con mayor puntaje serán seleccionados.',
      icon:'assets/images/event/pasos/paso3.png'
    },
    {
      name: '4. Formación',
      totime: '28 de Septiembre',
      endtime: '2006',
      description: 'Se realizará un día completo de talleres de formación con 4 expertos que evaluarán actitudes y habilidades, preparación para la última fase.',
      icon:'assets/images/event/pasos/paso4.png'
    },
    {
      name: '5. Pitch',
      totime: '28 de Septiembre',
      endtime: '2006',
      description: 'Presentación del pitch de su emprendimiento frente a <strong>3 empresarios externos<strong/> al programa, que evaluarán y determinarán si el proyecto debe ser acompañado.',
      icon:'assets/images/event/pasos/paso5.png'
    }
  ]

}
