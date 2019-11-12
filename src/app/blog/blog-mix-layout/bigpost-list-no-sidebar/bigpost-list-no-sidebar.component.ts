import { Component, OnInit } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/list'

@Component({
  selector: 'app-bigpost-list-no-sidebar',
  templateUrl: './bigpost-list-no-sidebar.component.html',
  styleUrls: ['./bigpost-list-no-sidebar.component.scss']
})
export class BigpostListNoSidebarComponent implements OnInit {

  public blogData: any
  
  constructor() {
    this.blogData = blogClassicDB.list;
   }

  ngOnInit() {
  }

}
