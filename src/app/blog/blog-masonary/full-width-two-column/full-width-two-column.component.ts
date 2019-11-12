import { Component, OnInit } from '@angular/core';
import { blogMasonaryDB } from '../../../shared/data/blog/blog-masonary/fullwidth-3'
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-full-width-two-column',
  templateUrl: './full-width-two-column.component.html',
  styleUrls: ['./full-width-two-column.component.scss']
})
export class TwoColMasonaryComponent implements OnInit {
  
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
