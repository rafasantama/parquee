import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-music-video',
  templateUrl: './music-video.component.html',
  styleUrls: ['./music-video.component.scss']
})
export class MusicVideoComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }
}
