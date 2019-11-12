import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-services',
  templateUrl: './resume-services.component.html',
  styleUrls: ['./resume-services.component.scss']
})
export class ResumeServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  service = [
    {
      img:"assets/images/resume/service-exprience/1.png",
      type:'UI Design'
    },
    {
      img:"assets/images/resume/service-exprience/2.png",
      type:'UX Design'
    },
    {
      img:"assets/images/resume/service-exprience/3.png",
      type:'Web Design'
    },
    {
      img:"assets/images/resume/service-exprience/4.png",
      type:'Web Design'
    },
    {
      img:"assets/images/resume/service-exprience/5.png",
      type:'Web Design'
    },
    {
      img:"assets/images/resume/service-exprience/6.png",
      type:'Web Devloper'
    },
    {
      img:"assets/images/resume/service-exprience/7.png",
      type:'Web Design'
    },
    {
      img:"assets/images/resume/service-exprience/8.png",
      type:'Web Design'
    }
   ]


}
