import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-artist',
  templateUrl: './music-artist.component.html',
  styleUrls: ['./music-artist.component.scss']
})
export class MusicArtistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  artists = [
    { 
      img:"assets/images/music/artist/1.png",
      name:"decorner",
      musician:"musician",
    },
    { 
      img:"assets/images/music/artist/2.png",
      name:"decorner",
      musician:"musician",
    },
    { 
      img:"assets/images/music/artist/3.png",
      name:"decorner",
      musician:"musician",
    }
  ]
  
  artistscarouselOptions= {
    items: 3,
    margin: 60,
    nav: false,
    dots:false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3,
            margin: 30
        },
        1600: {
            margin: 30
        }
    }
  }

}
