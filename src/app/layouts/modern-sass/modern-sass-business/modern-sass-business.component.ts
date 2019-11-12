import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-sass-business',
  templateUrl: './modern-sass-business.component.html',
  styleUrls: ['./modern-sass-business.component.scss']
})
export class ModernSassBusinessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  business = [
    {
      title:'Beautiful Interface Layout',
      description:'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    },
    {
      title:'Beautiful Interface Layout',
      description:'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    },
    {
      title:'Beautiful Interface Layout',
      description:'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    }
  ]
}
