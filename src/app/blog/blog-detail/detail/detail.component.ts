import { Component, OnInit } from '@angular/core';
import { blogDetailDB } from '../../../shared/data/blog/blog-detail/blog-detail'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  blogData=blogDetailDB.Details

  constructor() { }

  ngOnInit() {
  }

}
