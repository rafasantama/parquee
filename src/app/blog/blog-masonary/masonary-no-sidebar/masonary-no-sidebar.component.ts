import { Component, OnInit } from '@angular/core';
import { blogMasonaryDB } from '../../../shared/data/blog/blog-masonary/masonary'
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-masonary-no-sidebar',
  templateUrl: './masonary-no-sidebar.component.html',
  styleUrls: ['./masonary-no-sidebar.component.scss']
})
export class MasonaryNoSidebarComponent implements OnInit {

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
