import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/split'

@Component({
  selector: 'app-split-left-sidebar',
  templateUrl: './split-left-sidebar.component.html',
  styleUrls: ['./split-left-sidebar.component.scss']
})
export class SplitLeftSidebarComponent implements OnInit {

  public blogData: any

  constructor() {
    this.blogData = blogBasicDB.split;
   }

  ngOnInit() {
  }

}
