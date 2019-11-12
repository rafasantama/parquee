import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft } from 'ng-animate';
@Component({
  selector: 'app-somos-content',
  templateUrl: './somos-content.component.html',
  styleUrls: ['./somos-content.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      // Set the duration to 5seconds and delay to 0seconds
      params: { timing: 3, delay: 0 }
    }))])]
})
export class SomosContentComponent implements OnInit {

  fadeInLeft:any;
  
  constructor() { }

  ngOnInit() {
  }

}
