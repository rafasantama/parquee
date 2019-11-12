import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-dark-header',
  templateUrl: './dark-header.component.html',
  styleUrls: ['./dark-header.component.scss']
})
export class DarkHeaderComponent implements OnInit {

  constructor(public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-5');
  }

  headercarousel = [
    {
      tagLine1: "build your",
      tagLine2: "body more strong",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
    {
      tagLine1: "build your",
      tagLine2: "body more strong",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
  ]

  headercarouselOptions = {
    items: 1,
    margin: 0,
    autoHeight: true,
    nav: false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
  }
}
