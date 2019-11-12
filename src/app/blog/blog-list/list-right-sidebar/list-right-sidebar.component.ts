import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/list'

@Component({
  selector: 'app-list-right-sidebar',
  templateUrl: './list-right-sidebar.component.html',
  styleUrls: ['./list-right-sidebar.component.scss']
})
export class ListRightSidebarComponent implements OnInit {
  public blogData: any

  constructor() {
    this.blogData = blogBasicDB.list;
   }
  ngOnInit() {
  }

}
