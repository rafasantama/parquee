import { Component, OnInit } from '@angular/core';
import { blogDetailDB } from '../../../shared/data/blog/blog-detail/blog-detail'

@Component({
  selector: 'app-detail-left-sidebar',
  templateUrl: './detail-left-sidebar.component.html',
  styleUrls: ['./detail-left-sidebar.component.scss']
})
export class DetailLeftSidebarComponent implements OnInit {
  blogData = blogDetailDB.Details

  constructor() { }

  ngOnInit() {
  }

}
