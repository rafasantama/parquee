import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprice-sass-work',
  templateUrl: './enterprice-sass-work.component.html',
  styleUrls: ['./enterprice-sass-work.component.scss']
})
export class EnterpriceSassWorkComponent implements OnInit {
  public work: any = 'Configuration'
  constructor() { }

  ngOnInit() {
  }

  openWorkSlide(val){
    this.work = val
  }

  nav = [
    {
      img:'assets/images/saas1/tab-icon/installation.png',
      title:'Initializing'
    },
    {
      img:'assets/images/saas1/tab-icon/001-tap.png',
      title:'Add Instances'
    },
    {
      img:'assets/images/saas1/tab-icon/button.png',
      title:'Configuration'
    },
    {
      img:'assets/images/saas1/tab-icon/002-settings.png',
      title:'API Setting'
    },
    {
      img:'assets/images/saas1/tab-icon/key-1.png',
      title:'Security'
    }
  ]

  content=[
    {
      img:'assets/images/saas1/tab/Initializing.png',
      title:'Initializing'
    },
    {
      img:'assets/images/saas1/tab/Add-instant.png',
      title:'Add Instances'
    },
    {
      img:'assets/images/saas1/tab/Configuration.png',
      title:'Configuration'
    },
    {
      img:'assets/images/saas1/tab/Api.png',
      title:'API Setting'
    },
    {
      img:'assets/images/saas1/tab/Security.png',
      title:'Security'
    }
  ]

}
