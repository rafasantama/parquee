import { Component, OnInit } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

@Component({
  selector: 'app-wedding-gallery',
  templateUrl: './wedding-gallery.component.html',
  styleUrls: ['./wedding-gallery.component.scss']
})
export class WeddingGalleryComponent implements OnInit {
 
  activeFilter= 'all'
 
  constructor() { }

  ngOnInit() {
  }


  private urlsAll: string[] = [
    'assets/images/wedding-img/photo-album/1.jpg',
    'assets/images/wedding-img/photo-album/2.jpg',
    'assets/images/wedding-img/photo-album/3.jpg',
    'assets/images/wedding-img/photo-album/1.jpg',
    'assets/images/wedding-img/photo-album/2.jpg'];

    private urlsDesign: string[] = [
      'assets/images/wedding-img/photo-album/1.jpg',
      'assets/images/wedding-img/photo-album/2.jpg'];


    private urlsGraphics: string[] = [
      'assets/images/wedding-img/photo-album/1.jpg',
      'assets/images/wedding-img/photo-album/2.jpg',
      'assets/images/wedding-img/photo-album/1.jpg'];

  public filterImg(item){
    this.activeFilter = item
  }

}
