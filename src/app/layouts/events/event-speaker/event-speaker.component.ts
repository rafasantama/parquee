import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-speaker',
  templateUrl: './event-speaker.component.html',
  styleUrls: ['./event-speaker.component.scss']
})
export class EventSpeakerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  experts = [
    { 
     img:"assets/images/event/equipo/alejandromazo.jpg",
     name:"Alejandro Mazo Patiño",
     designation:"Coordinador de Emprendimiento"
    },
    { 
      img:"assets/images/event/equipo/manueltamayo.jpg",
      name:"Manuel Felipe Tamayo Díez",
      designation:"Líder de Incubación"
     },
     { 
      img:"assets/images/event/equipo/danielospina.jpg",
      name:"Daniel Ospina Ayala",
      designation:"Desarrollador de Negocios"
     },
     { 
      img:"assets/images/event/equipo/fannygallego.jpg",
      name:"Fanny Alexandra Gallego Lopera",
      designation:"Desarrollador de Negocios"
     },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"Libardo Castellanos Serna",
    //   designation:"Desarrollador de Negocios"
    //  },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"Miguel Fernando Tirado Bustamante",
    //   designation:"Desarrollador de Negocios"
    //  },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"Luis Felipe Botero Osorio",
    //   designation:"Desarrollador de Negocios"
    //  },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"Ángela María Londoño Bedoya",
    //   designation:"Desarrollador de Negocios"
    //  },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"Estefanía Ochoa Henao",
    //   designation:"Desarrollador de Negocios"
    //  },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"César Augusto Ruíz Gómez",
    //   designation:"Desarrollador de Negocios"
    //  },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"Carolina María Montoya Restrepo",
    //   designation:"Desarrollador de Negocios"
    //  },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"Silvia Denis Ospina Higuita",
    //   designation:"Desarrollador de Negocios"
    //  },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"Juan Diego Arango Gaviria",
    //   designation:"Desarrollador de Negocios"
    //  },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"Carlos Eduardo Vélez Mejía",
    //   designation:"Desarrollador de Negocios"
    //  },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"Daniela María Vélez Molina",
    //   designation:"Profesional Jr. Incubación"
    //  },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"Johana Andrea Muñoz Velazquéz",
    //   designation:"Auxiliar Técnica"
    //  },
    //  { 
    //   img:"assets/images/event/l3-4.png",
    //   name:"Margoth Estéfany Adarve Vásquez",
    //   designation:"Auxiliar Técnica"
    //  }
  ]

}
