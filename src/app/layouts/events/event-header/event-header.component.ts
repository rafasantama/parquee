import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.scss']
})
export class EventHeaderComponent implements OnInit,OnDestroy {
  public seconds: number;
  public bookingOffset: any = null;
  public timer : any;

  constructor(private modalService: NgbModal) { 
    this.setTime();
  }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  setTime() {
    this.timer = setInterval(function () {
      var countDown = new Date('dec 30, 2019 00:00:00').getTime();
      var now = new Date().getTime();
      var distance = countDown - now;
      this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
    }, this.seconds);
  }

  ngOnDestroy(){
    if (this.timer) {
        clearInterval(this.timer);
      }
  }
}


export class YoutubePopupComponent implements OnInit {

  constructor(private modalService: NgbModal, public colorPicker: ColorScssService) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}