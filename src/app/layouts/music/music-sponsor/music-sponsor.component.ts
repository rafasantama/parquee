import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-sponsor',
  templateUrl: './music-sponsor.component.html',
  styleUrls: ['./music-sponsor.component.scss']
})
export class MusicSponsorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sponsor = [
    {
      img:"assets/images/music/sponser/1.png"
    },
    {
      img:"assets/images/music/sponser/2.png"
    },
    {
      img:"assets/images/music/sponser/3.png"
    },
    {
      img:"assets/images/music/sponser/4.png"
    },
    {
      img:"assets/images/music/sponser/5.png"
    },
    {
      img:"assets/images/music/sponser/6.png"
    },
    {
      img:"assets/images/music/sponser/7.png"
    },
    {
      img:"assets/images/music/sponser/8.png"
    },
    {
      img:"assets/images/music/sponser/9.png"
    },
    {
      img:"assets/images/music/sponser/10.png"
    },
    {
      img:"assets/images/music/sponser/11.png"
    },
    {
      img:"assets/images/music/sponser/12.png"
    }
   ]

}
