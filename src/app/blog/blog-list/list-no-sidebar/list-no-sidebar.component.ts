import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/list'

@Component({
  selector: 'app-list-no-sidebar',
  templateUrl: './list-no-sidebar.component.html',
  styleUrls: ['./list-no-sidebar.component.scss']
})
export class ListNoSidebarComponent implements OnInit {

  public blogData: any
  
  constructor() {
    this.blogData = blogBasicDB.list;
   }

  ngOnInit() {
  }

}
