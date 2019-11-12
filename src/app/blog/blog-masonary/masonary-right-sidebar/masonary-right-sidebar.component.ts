import { Component, OnInit } from '@angular/core';
import { blogMasonaryDB } from '../../../shared/data/blog/blog-masonary/masonary'
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-masonary-right-sidebar',
  templateUrl: './masonary-right-sidebar.component.html',
  styleUrls: ['./masonary-right-sidebar.component.scss']
})
export class MasonaryRightSidebarComponent implements OnInit {
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
