import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ColorScssService } from '../shared/service/color-scss.service' 

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public url : any; 

  constructor(private router: Router, public colorPicker : ColorScssService) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }

}
