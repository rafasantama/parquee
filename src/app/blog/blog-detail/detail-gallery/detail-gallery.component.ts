import { Component, OnInit } from '@angular/core';
import { blogDetailDB } from '../../../shared/data/blog/blog-detail/blog-detail'

@Component({
  selector: 'app-detail-gallery',
  templateUrl: './detail-gallery.component.html',
  styleUrls: ['./detail-gallery.component.scss']
})
export class DetailGalleryComponent implements OnInit {
  blogData = blogDetailDB.Details

  constructor() { }

  ngOnInit() {
  }

  images = [
    {
      img: 'assets/images/agency/blog/12.jpg'
    },
    {
      img: 'assets/images/agency/blog/10.jpg'
    }
  ]

  imageGalleryOptions = {
    items: 1,
    nav: true,
    dots: false,
    navText: ['<img src="assets/images/agency/testimonial/left.png">', '<img src="assets/images/agency/testimonial/right.png">'],
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
  }
}
