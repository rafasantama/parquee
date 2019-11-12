import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agency-video',
  templateUrl: './agency-video.component.html',
  styleUrls: ['./agency-video.component.scss']
})
export class AgencyVideoComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }
}
