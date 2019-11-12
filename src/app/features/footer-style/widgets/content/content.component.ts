import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blogDetail=[{
    img:'assets/images/event/emprendedores/alamo.png',
    date:'June 19, 2018',
    type:'Phonics',
    title:'Alamo',
    description:'Realización de piezas audiovisuales comerciales, utilizando el cine como herramienta narrativa en lo comercial.',
    btn:'Ver Más'
  },
  {
    img:'assets/images/agency/blog/3.png',
    date:'June 19, 2018',
    type:'Phonics',
    title:'Twice profit than before you',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryies standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...............',
    btn:'read more'
  },
  {
    img:'assets/images/agency/blog/4.jpg',
    date:'June 19, 2018',
    type:'Phonics',
    title:'Twice profit than before you',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryies standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...............',
    btn:'read more'
  }
]

BlogCaraouselOption={
  items: 3,
  margin: 55,
  nav: false,
  dots: false,
  slideSpeed: 300,
  paginationSpeed: 400,
  loop: true,
  responsive: {
      0: {
          items: 1,
          margin: 10
      },
      576: {
          items: 2,
          margin: 10
      },
      991: {
          items: 3,
          margin: 10
      },
      1200: {
        items: 3,
        margin: 55
      },
      1600: {
          items: 3,
          margin: 15
      }
  }
}

}
