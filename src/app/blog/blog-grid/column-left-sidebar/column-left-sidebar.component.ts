import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/column'

@Component({
  selector: 'app-column-left-sidebar',
  templateUrl: './column-left-sidebar.component.html',
  styleUrls: ['./column-left-sidebar.component.scss']
})
export class ColumnLeftSidebarComponent implements OnInit {

  public blogData: any

  constructor() {
    this.blogData = blogBasicDB.column;
  }

  ngOnInit() {
  }

}
