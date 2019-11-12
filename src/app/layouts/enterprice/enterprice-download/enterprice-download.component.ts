import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-enterprice-download',
  templateUrl: './enterprice-download.component.html',
  styleUrls: ['./enterprice-download.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      // Set the duration to 5seconds and delay to 0seconds
      params: { timing: 5, delay: 0 }
    }))])
  ],
})
export class enterpriceDownloadComponent implements OnInit {

  fadeInLeft:any;

  constructor() { }

  ngOnInit() {
  }

}
