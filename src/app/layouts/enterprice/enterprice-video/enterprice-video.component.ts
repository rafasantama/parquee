import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-enterprice-video',
  templateUrl: './enterprice-video.component.html',
  styleUrls: ['./enterprice-video.component.scss']
})
export class enterpriceVideoComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }
}
