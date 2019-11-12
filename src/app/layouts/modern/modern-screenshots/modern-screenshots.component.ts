import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-screenshots',
  templateUrl: './modern-screenshots.component.html',
  styleUrls: ['./modern-screenshots.component.scss']
})
export class ModernScreenshotsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  screenshots = [
    { img: "assets/images/app_landing2/screenshot/1.png" },
    { img: "assets/images/app_landing2/screenshot/2.png" },
    { img: "assets/images/app_landing2/screenshot/1.png" },
    { img: "assets/images/app_landing2/screenshot/2.png" }

  ]
  
  screenshotscarouselOptions= {
    items: 3,
    margin: 55,
    autoHeight: true,
    nav: false,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        360: {
            items: 2,
            margin: 10
        },
        480: {
            margin: 15
        },
        576: {
            margin: 15
        },
        1000: {
            items: 3
        }
    }
  }
}
