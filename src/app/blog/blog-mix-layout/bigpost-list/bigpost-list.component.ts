import { Component, OnInit } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/list'

@Component({
  selector: 'app-bigpost-list',
  templateUrl: './bigpost-list.component.html',
  styleUrls: ['./bigpost-list.component.scss']
})
export class BigpostListComponent implements OnInit {

  public blogData: any
  
  constructor() {
    this.blogData = blogClassicDB.list;
   }

  ngOnInit() {
  }

}
