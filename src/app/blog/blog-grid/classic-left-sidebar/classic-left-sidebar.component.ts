import { Component, OnInit } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/classic'

@Component({
  selector: 'app-classic-left-sidebar',
  templateUrl: './classic-left-sidebar.component.html',
  styleUrls: ['./classic-left-sidebar.component.scss']
})
export class ClassicLeftSidebarComponent implements OnInit {

  public blogData: any

  constructor() {
    this.blogData = blogClassicDB.classic;
  }

  ngOnInit() {
  }

}
