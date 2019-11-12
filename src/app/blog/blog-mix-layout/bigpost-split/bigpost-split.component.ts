import { Component, OnInit } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/split'

@Component({
  selector: 'app-bigpost-split',
  templateUrl: './bigpost-split.component.html',
  styleUrls: ['./bigpost-split.component.scss']
})
export class BigpostSplitComponent implements OnInit {

  public blogData: any
  
  constructor() {
    this.blogData = blogClassicDB.split;
   }

  ngOnInit() {
  }

}
