import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service';

@Component({
  selector: 'app-portfolio-title-two-col',
  templateUrl: './portfolio-title-two-col.component.html',
  styleUrls: ['./portfolio-title-two-col.component.scss']
})
export class PortfolioTitleTwoColComponent implements OnInit {

  constructor(public displayblock:ColorScssService) {
    displayblock.displyBlock= true;
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.displayblock.displyBlock = false;
  }

}
