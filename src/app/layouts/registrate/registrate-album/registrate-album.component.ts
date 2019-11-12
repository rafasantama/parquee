import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrate-album',
  templateUrl: './registrate-album.component.html',
  styleUrls: ['./registrate-album.component.scss']
})
export class RegistrateAlbumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

  experts=[
    {
    img:"assets/images/event/proceso/paso1.jpg",
    name: "1. Equipo Emprendedor",
    designation:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  },
  {
    img:"./assets/images/event/proceso/paso2.jpg",
    name: "2. Inscripción de Iniciativa Empresarial",
    designation:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  },
  {
    img:"assets/images/event/proceso/paso3.jpg",
    name: "3. Proceso de Selección",
    designation:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  },
  {
    img:"assets/images/event/proceso/paso4.jpg",
    name: "4. Redireccionamiento Entidades del Ecosistema",
    designation:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  },
  {
    img:"assets/images/event/proceso/paso5.jpg",
    name: "5. Diagnostico de Estado de Emprendimiento",
    designation:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  },
  {
    img:"assets/images/event/proceso/paso6.jpg",
    name: "6. Plan de Intervención",
    designation:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  },
  {
    img:"assets/images/event/proceso/paso7.jpg",
    name: "7. Proceso de Acompañamiento",
    designation:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  },
  {
    img:"assets/images/event/proceso/paso8.jpg",
    name: "8. Diagnostico de Evaluación de Salida",
    designation:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  },
  {
    img:"assets/images/event/proceso/paso9.jpg",
    name: "9. Analisís de Avances del Acompañamiento",
    designation:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  }
]

}
