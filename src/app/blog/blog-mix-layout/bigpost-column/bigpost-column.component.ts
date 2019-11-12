import { Component, OnInit } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/column'

@Component({
  selector: 'app-bigpost-column',
  templateUrl: './bigpost-column.component.html',
  styleUrls: ['./bigpost-column.component.scss']
})
export class BigpostColumnComponent implements OnInit {
  public blogData: any
  
  constructor() {
    this.blogData = blogClassicDB.column;
   }

  ngOnInit() {
  }

}
