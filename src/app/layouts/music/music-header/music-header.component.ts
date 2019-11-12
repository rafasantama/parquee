import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-header',
  templateUrl: './music-header.component.html',
  styleUrls: ['./music-header.component.scss']
})
export class MusicHeaderComponent implements OnInit {
sideBarDispaly:string="none";

  constructor() { }

  ngOnInit() {
  }

  sideBar(){
    (this.sideBarDispaly=='none')?this.sideBarDispaly='block':this.sideBarDispaly='none'
  }

}
