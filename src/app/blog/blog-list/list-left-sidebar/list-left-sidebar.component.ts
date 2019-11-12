import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/list'

@Component({
  selector: 'app-list-left-sidebar',
  templateUrl: './list-left-sidebar.component.html',
  styleUrls: ['./list-left-sidebar.component.scss']
})
export class ListLeftSidebarComponent implements OnInit {

  public blogData: any
  
  constructor() {
    this.blogData = blogBasicDB.list;
   }

  ngOnInit() {
  }

}
