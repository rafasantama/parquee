import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../shared/service/color-scss.service'
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private title: Title, public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-7');
    this.title.setTitle(this.route.snapshot.data['title']);
  }

}
