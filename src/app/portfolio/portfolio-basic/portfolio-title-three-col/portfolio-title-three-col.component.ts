import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../../shared/service/color-scss.service';

@Component({
  selector: 'app-portfolio-title-three-col',
  templateUrl: './portfolio-title-three-col.component.html',
  styleUrls: ['./portfolio-title-three-col.component.scss']
})
export class PortfolioTitleThreeColComponent implements OnInit {
  
  constructor(public displayblock:ColorScssService) {
    displayblock.displyBlock= true;
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.displayblock.displyBlock = false;
  }

}
