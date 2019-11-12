import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ColorScssService } from '../../shared/service/color-scss.service'

@Component({
  selector: 'app-enterprice',
  templateUrl: './enterprice.component.html',
  styleUrls: ['./enterprice.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EnterpriceComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private title: Title,
    public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-1');
    this.title.setTitle(this.route.snapshot.data['title']);
  }

}
