import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { blogDetailDB } from '../../../shared/data/blog/blog-detail/blog-detail'

@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrls: ['./detail-video.component.scss']
})
export class DetailVideoComponent implements OnInit {
  blogData = blogDetailDB.Details

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }
}
