import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/split'

@Component({
  selector: 'app-split-no-sidebar',
  templateUrl: './split-no-sidebar.component.html',
  styleUrls: ['./split-no-sidebar.component.scss']
})
export class SplitNoSidebarComponent implements OnInit {

  public blogData: any

  constructor() {
    this.blogData = blogBasicDB.split;
   }

  ngOnInit() {
  }

}
