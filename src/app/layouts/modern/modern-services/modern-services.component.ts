import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-services',
  templateUrl: './modern-services.component.html',
  styleUrls: ['./modern-services.component.scss']
})
export class ModernServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  services = [
    {
      img: "assets/images/app_landing2/service/2-1.png",
      title: "Fast and optimized",
      description: "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable."
    },
    {
      img: "assets/images/app_landing2/service/2-2.png",
      title: "Well Documented",
      description: "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable."
    },
    {
      img: "assets/images/app_landing2/service/2-3.png",
      title: "Easy Integration",
      description: "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable."
    },
    {
      img: "assets/images/app_landing2/service/2-4.png",
      title: "Team Collaboration",
      description: "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable."
    },
    {
      img: "assets/images/app_landing2/service/2-5.png",
      title: "User Permissions",
      description: "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable."
    },
    {
      img: "assets/images/app_landing2/service/2-6.png",
      title: "Unlimited Storage",
      description: "Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable."
    }
  ]

}
