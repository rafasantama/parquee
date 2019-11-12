import { Component, OnInit } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/split'

@Component({
  selector: 'app-bigpost-split-no-sidebar',
  templateUrl: './bigpost-split-no-sidebar.component.html',
  styleUrls: ['./bigpost-split-no-sidebar.component.scss']
})
export class BigpostSplitNoSidebarComponent implements OnInit {

  public blogData: any
  
  constructor() {
    this.blogData = blogClassicDB.split;
   }

  ngOnInit() {
  }

}
