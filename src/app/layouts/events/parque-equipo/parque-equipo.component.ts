import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parque-equipo',
  templateUrl: './parque-equipo.component.html',
  styleUrls: ['./parque-equipo.component.scss']
})
export class ParqueEquipoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  experts= [
    { 
     img:"assets/images/event/equipo/alejandromazo.jpg",
     name:"Alejandro Mazo Patiño",
     designation:"Coordinador de Emprendimiento"
    },
    { 
      img:"assets/images/event/equipo/manueltamayo.jpg",
      name:"Manuxel Felipe Tamayo Díez",
      designation:"Líder de Incubación"
     },
     { 
      img:"assets/images/event/equipo/alexandragallego.jpg",
      name:"Alexandra Gallego Lopera",
      designation:"Desarrollador de Negocios"
     },
    //  { 
    //   img:"assets/images/event/equipo/libardocastellanos.jpg",
    //   name:"Libardo Castellanos Serna",
    //   designation:"Desarrollador de Negocios"
    //  },
     { 
      img:"assets/images/event/equipo/migueltirado.jpg",
      name:"Miguel Fernando Tirado Bustamante",
      designation:"Desarrollador de Negocios"
     },
     { 
      img:"assets/images/event/equipo/luisbotero.jpg",
      name:"Luis Felipe Botero Osorio",
      designation:"Desarrollador de Negocios"
     },
     { 
      img:"assets/images/event/equipo/angelalondono.jpg",
      name:"Ángela María Londoño Bedoya",
      designation:"Desarrollador de Negocios"
     },
     { 
      img:"assets/images/event/equipo/estefaniaochoa.jpg",
      name:"Estefanía Ochoa Henao",
      designation:"Desarrollador de Negocios"
     },
     { 
      img:"assets/images/event/equipo/carolinamontoya.jpg",
      name:"Carolina María Montoya Restrepo",
      designation:"Desarrollador de Negocios"
     },
     { 
      img:"assets/images/event/equipo/silviaospina.jpg",
      name:"Silvia Denis Ospina Higuita",
      designation:"Desarrollador de Negocios"
     },
    //  { 
    //   img:"assets/images/event/equipo/juanarango.jpg",
    //   name:"Juan Diego Arango Gaviria",
    //   designation:"Desarrollador de Negocios"
    //  },
     { 
      img:"assets/images/event/equipo/danielavelez.jpg",
      name:"Daniela María Vélez Molina",
      designation:"Profesional Jr. Incubación"
     },
    //  { 
    //   img:"assets/images/event/equipo/margothadarve.jpg",
    //   name:"Margoth Estéfany Adarve Vásquez",
    //   designation:"Auxiliar Técnica"
    //  }
  ]

blagCarouselOptions=
  {
    items: 3,
    margin: 1,
    nav: true,
    dots: false,
    autoplay: true,
    slideSpeed: 100,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        }   ,
        576: {
            items: 2,
            margin: 1
        },
        1024: {
          items: 3,
          margin: 1
      },
      1200: {
        items: 3,
        margin: 1
    }
    }
  }
}
