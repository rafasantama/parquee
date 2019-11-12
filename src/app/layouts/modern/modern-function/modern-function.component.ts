import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInRight } from 'ng-animate';

@Component({
  selector: 'app-modern-function',
  templateUrl: './modern-function.component.html',
  styleUrls: ['./modern-function.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight, {
      // Set the duration to 5seconds and delay to 0seconds
      params: { timing: 5, delay: 0 }
    }))])
  ],
})
export class ModernFunctionComponent implements OnInit {

  fadeInRight: any;
  
  constructor() { }

  ngOnInit() {
  }

}
