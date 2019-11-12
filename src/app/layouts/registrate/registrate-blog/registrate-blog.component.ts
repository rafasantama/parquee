import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrate-blog',
  templateUrl: './registrate-blog.component.html',
  styleUrls: ['./registrate-blog.component.scss']
})
export class RegistrateBlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blogs=[
    {
    img:"assets/images/event/acompañamiento/paso1.png",
    text: "1. Equipo Emprendedor",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  },
  {
    img:"./assets/images/event/acompañamiento/paso2.png",
    text: "2. Inscripción de Iniciativa Empresarial",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  },
  {
    img:"assets/images/event/acompañamiento/paso3.png",
    text: "3. Proceso de Selección",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  },
  {
    img:"assets/images/event/acompañamiento/paso4.png",
    text: "4. Redireccionamiento Entidades del Ecosistema",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,…",
  }
]

blagCarouselOptions=
  {
    items: 3,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        }   ,
        1024: {
            items: 2
        }
    }
  }
}
