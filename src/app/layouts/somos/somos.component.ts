import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorScssService } from '../../shared/service/color-scss.service'
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.scss']
})
export class SomosComponent implements OnInit {

  constructor(public colorPicker: ColorScssService, private route: ActivatedRoute,
    private title: Title) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-2');
    this.colorPicker.setFontScheme();
    this.title.setTitle(this.route.snapshot.data['title']);

  }

}
