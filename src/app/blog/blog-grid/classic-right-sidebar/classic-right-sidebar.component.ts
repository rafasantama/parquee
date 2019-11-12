import { Component, OnInit } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/classic'

@Component({
  selector: 'app-classic-right-sidebar',
  templateUrl: './classic-right-sidebar.component.html',
  styleUrls: ['./classic-right-sidebar.component.scss']
})
export class ClassicRightSidebarComponent implements OnInit {

  public blogData: any

  constructor() {
    this.blogData = blogClassicDB.classic;
  }

  ngOnInit() {
  }

}
