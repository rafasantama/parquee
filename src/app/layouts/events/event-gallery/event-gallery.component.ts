import { Component, OnInit, ViewChild } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-event-gallery',
  templateUrl: './event-gallery.component.html',
  styleUrls: ['./event-gallery.component.scss']
})
export class EventGalleryComponent implements OnInit {

  @ViewChild('masonry', {static:false}) masonry: NgxMasonryComponent

  public activeFilter= 'all'

  constructor() {  }

  ngOnInit() {
  }

  public myOptions: NgxMasonryOptions = {
    transitionDuration: '0.8s',
    originTop: true
  };

  private urlsAll: string[] = [
    'assets/images/event/gallery/1.jpg',
    'assets/images/event/gallery/2.jpg',
    'assets/images/event/gallery/1.jpg',
    'assets/images/event/gallery/2.jpg', 
    'assets/images/event/gallery/3.jpg'];



    private urlsFashion: string[] = [
      'assets/images/event/gallery/1.jpg',
      'assets/images/event/gallery/2.jpg'];


    private urlsBags: string[] = [
      'assets/images/event/gallery/1.jpg',
      'assets/images/event/gallery/1.jpg',
      'assets/images/event/gallery/2.jpg'];

  public filterImg(item){
    this.activeFilter = item
  }

}