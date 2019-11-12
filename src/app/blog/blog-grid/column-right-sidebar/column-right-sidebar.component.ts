import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/column'

@Component({
  selector: 'app-column-right-sidebar',
  templateUrl: './column-right-sidebar.component.html',
  styleUrls: ['./column-right-sidebar.component.scss']
})
export class ColumnRightSidebarComponent implements OnInit {

  public blogData: any
  
  constructor() {
    this.blogData = blogBasicDB.column;
   }

  ngOnInit() {
  }

}
