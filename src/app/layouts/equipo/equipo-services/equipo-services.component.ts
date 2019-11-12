import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo-services',
  templateUrl: './equipo-services.component.html',
  styleUrls: ['./equipo-services.component.scss']
})
export class EquipoServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  services = [
    {
      img:'assets/images/saas2/our-feature/1.png',
      title:'Gestión del conocimiento',
      description:'los emprendedores reconocen que la ventaja competitiva no es el producto o servicio, sino la capacidad de generar respuestas a las necesidades cambiantes de los clientes a partir del conocimiento.'
    },
    {
      img:'assets/images/saas2/our-feature/2.png',
      title:'Crecimiento en ventas por encima del promedio',
      description:'proyectos con estrategias comerciales que permiten aumentar las ventas por encima del promedio de su industria. Están orientados a un mercado grande, creciente o en desarrollo (nuevo mercado).'
    },
    {
      img:'assets/images/saas2/our-feature/3.png',
      title:'Gestión del talento humano',
      description:'Generan empleo formal y de calidad.'
    },
    {
      img:'assets/images/saas2/our-feature/4.png',
      title:'Gestión Tecnológica',
      description:'estructuran y desarrollan sus procesos empresariales apalancados en conocimiento y tecnología. '
    },
    {
      img:'assets/images/saas2/our-feature/5.png',
      title:'Adopción de prácticas de Gobierno Corporativo',
      description:'Se constituyen de manera formal, respetando los derechos de socios minoritarios, empleados y terceros.'
    },
    {
      img:'assets/images/saas2/our-feature/6.png',
      title:'Smart Performance',
      description:'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
    }
  ]
}
