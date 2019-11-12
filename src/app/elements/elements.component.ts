import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ColorScssService } from '../shared/service/color-scss.service' 

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

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
