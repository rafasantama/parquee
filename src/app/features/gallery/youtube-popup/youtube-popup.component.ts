import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-youtube-popup',
  templateUrl: './youtube-popup.component.html',
  styleUrls: ['./youtube-popup.component.scss']
})
export class YoutubePopupComponent implements OnInit {

  constructor(private modalService: NgbModal, public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
