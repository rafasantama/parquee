import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/split'

@Component({
  selector: 'app-split-right-sidebar',
  templateUrl: './split-right-sidebar.component.html',
  styleUrls: ['./split-right-sidebar.component.scss']
})
export class SplitRightSidebarComponent implements OnInit {
  public blogData: any

  constructor() {
    this.blogData = blogBasicDB.split;
   }
   
  ngOnInit() {
  }

}
