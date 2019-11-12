import { Component, OnInit } from '@angular/core';
import { blogMasonaryDB } from '../../../shared/data/blog/blog-masonary/fullwidth-3'
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-fullwidth-three-column',
  templateUrl: './fullwidth-three-column.component.html',
  styleUrls: ['./fullwidth-three-column.component.scss']
})
export class FullwidthThreeColumnComponent implements OnInit {
  public blogData: any
  
  constructor() {
    setTimeout(()=> {
    this.blogData = blogMasonaryDB.masonary;
    })
  }

  ngOnInit() {
  }

  public myOptions: NgxMasonryOptions = {
      transitionDuration: '0.8s',
      originTop: true
  };
}

