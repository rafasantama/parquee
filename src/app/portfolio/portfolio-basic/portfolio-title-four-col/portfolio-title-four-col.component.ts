import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service';

@Component({
  selector: 'app-portfolio-title-four-col',
  templateUrl: './portfolio-title-four-col.component.html',
  styleUrls: ['./portfolio-title-four-col.component.scss']
})
export class PortfolioTitleFourColComponent implements OnInit, OnDestroy {
 
  constructor(public displayblock:ColorScssService) {
    displayblock.displyBlock= true;
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.displayblock.displyBlock = false;
  }
}
