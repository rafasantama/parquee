import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../shared/service/color-scss.service'
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {

  constructor(public colorPicker: ColorScssService, private route: ActivatedRoute,
    private title: Title,
    private meta: Meta) {

  }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-6');
    this.title.setTitle(this.route.snapshot.data['title']);
    this.title.setTitle(this.route.snapshot.data['title']);
    this.meta.updateTag({ name: 'description', content: this.route.snapshot.data['content'] })
    this.meta.addTag({ name: this.route.snapshot.data['title'], content: this.route.snapshot.data['content'] })
    this.meta.addTag({ property: "og:title", content: this.route.snapshot.data['content'] })
  }

}
