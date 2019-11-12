import { Component, OnInit } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/column-no-sidebar'

@Component({
  selector: 'app-bigpost-column-no-sidebar',
  templateUrl: './bigpost-column-no-sidebar.component.html',
  styleUrls: ['./bigpost-column-no-sidebar.component.scss']
})
export class BigpostColumnNoSidebarComponent implements OnInit {
  public blogData: any
  
  constructor() {
    this.blogData = blogClassicDB.column;
   }

  ngOnInit() {
  }

}
