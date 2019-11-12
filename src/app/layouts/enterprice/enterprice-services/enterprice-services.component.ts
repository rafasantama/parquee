import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprice-services',
  templateUrl: './enterprice-services.component.html',
  styleUrls: ['./enterprice-services.component.scss']
})
export class enterpriceServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  services = [
    {
      img: "assets/images/app_landing1/icons/1-1.png",
      title: "Powerful System",
      description: "There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered."
    },
    {
      img: "assets/images/app_landing1/icons/1-2.png",
      title: "Personalization",
      description: "There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered."
    },
    {
      img: "assets/images/app_landing1/icons/1-3.png",
      title: "Ease of Access",
      description: "There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered."
    },
  ]

}
