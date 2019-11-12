import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/column'
@Component({
  selector: 'app-column-no-sidebar',
  templateUrl: './column-no-sidebar.component.html',
  styleUrls: ['./column-no-sidebar.component.scss']
})
export class ColumnNoSidebarComponent implements OnInit {
  public blogData: any
  
  constructor() {
    this.blogData = blogBasicDB.column;
   }

  ngOnInit() {
  }

}
