import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-testimonial',
  templateUrl: './event-testimonial.component.html',
  styleUrls: ['./event-testimonial.component.scss']
})
export class EventTestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users = [
    { 
      img:"assets/images/event/testimonial/bits.png",
      nombre: "Rafael SantaMaría",
      empresa: "BITS",
      testimonio:"Gracias al parque de emprendimiento encontramos un nuevo modelo de negocio, pasando de la venta consultiva a la creación de productos escalables. Afianzamos nuestra propuesta de valor y como llevarla al mercado. Su acompañamiento nos permitio crecer la empresa desde las diferentes dimensiones"
    },
    {
      img:"assets/images/event/testimonial/dataknow.png",
      nombre: "Carlos Murillo",
      empresa: "DataKnow",
      testimonio:"En uno de los eventos de financiacion del parque logramos cerrar un importante convenio con Valoriza"
    },
    {
      img:"assets/images/event/testimonial/pintu-eco.png",
      nombre: "Rafael SantaMaría",
      empresa: "Pintu-Eco",
      testimonio:"En uno de los eventos de financiacion del parque logramos cerrar un importante convenio con Valoriza"
    }
  ]
  
  testimonialCarouselOptions= {
    items: 1,
    margin: 0,
    autoHeight: true,
    nav: true,
    dots: false,
    navText: ['<img src="assets/images/music/gallery/gallery-icon/left.png">', '<img src="assets/images/music/gallery/gallery-icon/right.png">'],
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true
  }



}
