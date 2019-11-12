import { Component, OnInit } from '@angular/core';
import { blogDetailDB } from '../../../shared/data/blog/blog-detail/blog-detail'

@Component({
  selector: 'app-detail-no-sidebar',
  templateUrl: './detail-no-sidebar.component.html',
  styleUrls: ['./detail-no-sidebar.component.scss']
})
export class DetailNoSidebarComponent implements OnInit {
  blogData = blogDetailDB.Details

  constructor() { }

  ngOnInit() {
  }

}
