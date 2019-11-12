import { Component, OnInit } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-event-blog',
  templateUrl: './event-blog.component.html',
  styleUrls: ['./event-blog.component.scss']
})
export class EventBlogComponent implements OnInit {
  
  //@ViewChild('masonry', {static:false}) masonry: NgxMasonryComponent

  public activeFilter= 'all'

  constructor() {  }

  ngOnInit() {
  }

  public myOptions: NgxMasonryOptions = {
    transitionDuration: '0.8s',
    originTop: true
  };

  private urlsAll: string[] = [
    'assets/images/event/gallery/1.jpg',
    'assets/images/event/gallery/2.jpg',
    'assets/images/event/gallery/1.jpg',
    'assets/images/event/gallery/2.jpg', 
    'assets/images/event/gallery/3.jpg'];



    private urlsFashion: object[] = [
      { 
       img:"assets/images/event/blog/1.jpg",
       date:"5 September 2019",
       type:"admin",
       title:"Find Great Speaker For Event.",
       subTitle:"Detais This Event",
       description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
      },
      { 
        img:"assets/images/event/blog/2.jpg",
        date:"5 September 2019",
        type:"admin",
        title:"Find Great Speaker For Event.",
        subTitle:"Detais This Event",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
       },
       { 
        img:"assets/images/event/blog/3.jpg",
        date:"5 September 2019",
        type:"admin",
        title:"Find Great Speaker For Event.",
        subTitle:"Detais This Event",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
       },
    ];


    private urlsBags: string[] = [
      'assets/images/event/gallery/1.jpg',
      'assets/images/event/gallery/1.jpg',
      'assets/images/event/gallery/2.jpg'];

  public filterImg(item){
    this.activeFilter = item
  }

  noticias = [
    { 
     img:"assets/images/event/blog/noticia1.jpg",
     date:"5 September 2019",
     type:"admin",
     title:"¿Cómo ingresar a la incubadora de negocios Parque E?",
     subTitle:"Instructivos",
     description:"Si eres emprendedor y quieres ser parte de la incubadora universitaria de negocios de Medellín, esto es todo lo que debes saber."
    },
    { 
      img:"assets/images/event/blog/noticia2.png",
      date:"5 September 2019",
      type:"BITS",
      title:"Certificados de Educación y Experiencia en Blockchain",
      subTitle:"Nuestras historia",
      description:"La empresa pionera en desarrollo de aplicaciones descentralizadas ha desarrollado una plataforma que permite verficar la validez de un diploma facilmente"
     },
     { 
      img:"assets/images/event/blog/noticia3.jpg",
      date:"5 September 2019",
      type:"Libardo Castellanos",
      title:"Comité Empresarial Parque E, una ventana hacia el mercado",
      subTitle:"Estrategica",
      description:"Los espacios de socialización creados por Parque E permiten a los emprendedores mostrar sus ideas de negocio ante reconocidos empresarios del país."
     },
  ]
  banco_oportunidades = [
    { 
     img:"assets/images/event/blog/convocatoria1.jpg",
     date:"5 September 2019",
     type:"Manuel Tamayo",
     title:"Convocatoria Aldea",
     subTitle:"Innpulsa",
     description:"Se abre la convocatoria anual de la aldea para acompañamiento de emprendiemientos y apoyo financiero."
    },
    { 
      img:"assets/images/event/blog/convocatoria2.png",
      date:"5 September 2019",
      type:"Manuel Tamayo",
      title:"En Medellín 15 empresas TIC se consolidan con el apoyo de Apps.co de MinTIC y Colciencias",
      subTitle:"Apps.co",
      description:"Un grupo de 15 empresas del sector de Tecnologías de la Información y la Comunicación de la ciudad recibió, durante 20 semanas, acompañamiento del programa Crecimiento y Consolidación."
     },
     { 
      img:"assets/images/event/blog/convocatoria3.jpg",
      date:"5 September 2019",
      type:"Manuel Tamayo",
      title:"Laboratorio de Innovación de Ruta N",
      subTitle:"Detais This Event",
      description:"Se encuentran abiertas las convocatorias para participar del laboratorio de innovación de Ruta N."
     },
  ]
  capsulas_conocimiento = [
    { 
     img:"assets/images/event/blog/capsula1.png",
     date:"5 September 2019",
     type:"Carolina Calle",
     title:"Marketing Digital",
     subTitle:"Mercados",
     description:"El marketing digital es una gran herramienta para muchas empresas, permite captar clientes potencial con mayor precisión mediante datos de comportmaiento del publico objetivo."
    },
    { 
      img:"assets/images/event/blog/capsula2.jpg",
      date:"5 September 2019",
      type:"Danna Garcia",
      title:"Lo que debe saber un emprendedor sobre la DIAN y el pago de impuestos",
      subTitle:"Contable",
      description:"Tener una planeación tributaria, realizar declaraciones de renta y otros compromisos legales que deberías conocer para evitar dolores de cabeza a fin de año."
     },
     { 
      img:"assets/images/event/blog/capsula3.jpg",
      date:"5 September 2019",
      type:"Miguel Tirado",
      title:"Modelo Financiero",
      subTitle:"Dimensión Financiera",
      description:"En esta guia encontrara todos los aspectos que debe tener en cuenta al momento de realizar un modelo Financiero."
     },
  ] 
    blogCarouselOptions= {
      items: 3,
      margin: 60,
      nav: true,
      dots:false,
      autoplay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
          0: {
              items: 1,
              margin: 10
          },
          991: {
              items: 2,
              margin: 10
          },
          1200: {
              items: 3,
              margin: 30
          }
      }
  }

}


