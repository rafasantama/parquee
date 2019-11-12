import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-team-member',
  templateUrl: './modern-team-member.component.html',
  styleUrls: ['./modern-team-member.component.scss']
})
export class ModernTeamMemberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  users = [
    { 
      img:"assets/images/app_landing2/team/1.png",
      name:"Kolan Motto",
      designation:"Seniour UI/Xi Designer",
    },
    { 
      img:"assets/images/app_landing2/team/2.png",
      name:"Kolan Motto",
      designation:"Seniour UI/Xi Designer",
    },
    { 
      img:"assets/images/app_landing2/team/3.png",
      name:"Kolan Motto",
      designation:"Seniour UI/Xi Designer",
    },
    { 
      img:"assets/images/app_landing2/team/4.png",
      name:"Kolan Motto",
      designation:"Seniour UI/Xi Designer",
    }
  ]
}
