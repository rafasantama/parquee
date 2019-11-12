import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-about',
  templateUrl: './resume-about.component.html',
  styleUrls: ['./resume-about.component.scss']
})
export class ResumeAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  about=[
    {
      name:'Photoshop',
      timer:'95%',
      exp:'4 Years Experince'
    },
    {
      name:'illustrator',
      timer:'95%',
      exp:'4 Years Experince'
    },
    {
      name:'html & css',
      timer:'95%',
      exp:'4 Years Experince'
    },
    {
      name:'wordpress',
      timer:'95%',
      exp:'4 Years Experince'
    }
  ]
}
