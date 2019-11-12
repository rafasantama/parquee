import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-two',
  templateUrl: './modern-two.component.html',
  styleUrls: ['./modern-two.component.scss']
})
export class ModernTwoComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  
  public customizer: any="all"
  
  allImages = [
   { img: 'assets/images/portfolio/1.jpg' },
   { img: 'assets/images/portfolio/2.jpg' },
   { img: 'assets/images/portfolio/3.jpg' },
   { img: 'assets/images/portfolio/4.jpg' },
   { img: 'assets/images/portfolio/5.jpg' },
   { img: 'assets/images/portfolio/6.jpg' },
   { img: 'assets/images/portfolio/7.jpg' },
   { img: 'assets/images/portfolio/6.jpg' },
  ];

  fashionImages = [
   { img: 'assets/images/portfolio/1.jpg' },
   { img: 'assets/images/portfolio/5.jpg' },
   { img: 'assets/images/portfolio/6.jpg' },
   { img: 'assets/images/portfolio/7.jpg' },
   { img: 'assets/images/portfolio/3.jpg' },
  ];

  bagsImages = [
   { img: 'assets/images/portfolio/1.jpg'}
  ];

  shoesImages = [
   { img: 'assets/images/portfolio/7.jpg' },
   { img: 'assets/images/portfolio/3.jpg' },
  ];

  watchImages = [
   { img: 'assets/images/portfolio/1.jpg' },
   { img: 'assets/images/portfolio/2.jpg' },
   { img: 'assets/images/portfolio/3.jpg' },
   { img: 'assets/images/portfolio/4.jpg' },
  ];

  
  openGallery(val){
    this.customizer = val
  }

}
