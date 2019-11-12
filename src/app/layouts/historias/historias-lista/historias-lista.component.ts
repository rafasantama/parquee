import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/split'

@Component({
  selector: 'app-historias-lista',
  templateUrl: './historias-lista.component.html',
  styleUrls: ['./historias-lista.component.scss']
})
export class HistoriasListaComponent implements OnInit {
  public blogData: any

  constructor() {
    this.blogData = blogBasicDB.split;
   }
   
  ngOnInit() {
  }

}
