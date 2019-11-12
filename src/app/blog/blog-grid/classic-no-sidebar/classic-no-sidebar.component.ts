import { Component, OnInit } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/classic'

@Component({
  selector: 'app-classic-no-sidebar',
  templateUrl: './classic-no-sidebar.component.html',
  styleUrls: ['./classic-no-sidebar.component.scss']
})
export class ClassicNoSidebarComponent implements OnInit {

  public blogData: any

  constructor() {
    this.blogData = blogClassicDB.classic;
  }

  ngOnInit() {
  }

}
