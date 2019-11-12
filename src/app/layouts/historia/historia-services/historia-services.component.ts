import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia-services',
  templateUrl: './historia-services.component.html',
  styleUrls: ['./historia-services.component.scss']
})
export class HistoriaServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  services = [
    {
      img: "assets/images/app_landing1/icons/1-1.png",
      title: "Apoyo a Instituciones de Educación Superior",
      description: "Brindamos a los jovenes universitarios e investigadores la oportunidad de convertir sus ideas de negocio en proyectos empresariales exitosos con perspectivas no solo en mercados locales, sino tambien nacionales e internacionales."
    },
    {
      img: "assets/images/app_landing1/icons/1-2.png",
      title: "Convocatorias Abiertas",
      description: "En la actualidad las puertas de Parque E estan abiertas para recibir proyectos empresariales con alto potencial de crecimiento.                                                                                                      "
    },
    {
      img: "assets/images/app_landing1/icons/1-3.png",
      title: "¿Que Ofrecemos?",
      description: "Una amplia infraestructura y un conjunto de beneficios que vam desde la sensibilización y formación, hasta la asesoría especializada y el acceso a redes empresariales para el desarrollo  de sus emprendimientos.                    "
    },
  ]

}
