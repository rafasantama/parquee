import { Component, OnInit } from '@angular/core';
import {
  ButtonsConfig,
  ButtonsStrategy,
  AdvancedLayout,
  Image,
  KS_DEFAULT_BTN_CLOSE,
  KS_DEFAULT_BTN_DELETE,
  KS_DEFAULT_BTN_DOWNLOAD,
  KS_DEFAULT_BTN_EXTURL,
  KS_DEFAULT_BTN_FULL_SCREEN,
  PlainGalleryConfig,
  PlainGalleryStrategy,
} from '@ks89/angular-modal-gallery';
import { ColorScssService } from '../../../shared/service/color-scss.service'

@Component({
  selector: 'app-portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrls: ['./portfolio-gallery.component.scss']
})
export class PortfolioGalleryComponent implements OnInit {
  public customizer: any = "all"
  allImages: Image[] = [
    new Image(0, { img: 'assets/images/portfolio/1.jpg' }),
    new Image(0, { img: 'assets/images/portfolio/2.jpg' }),
    new Image(1, { img: 'assets/images/portfolio/3.jpg' }),
    new Image(2, { img: 'assets/images/portfolio/5.jpg' }),
    new Image(3, { img: 'assets/images/portfolio/4.jpg' }),
    new Image(4, { img: 'assets/images/portfolio/6.jpg' }),
    new Image(5, { img: 'assets/images/portfolio/7.jpg' }),
    new Image(6, { img: 'assets/images/portfolio/8.png' }),
    new Image(7, { img: 'assets/images/portfolio/9.jpg' }),
  ];

  constructor(private displayblock: ColorScssService) {
  }

  buttonsConfigCustom: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      KS_DEFAULT_BTN_FULL_SCREEN,
      KS_DEFAULT_BTN_DELETE,
      KS_DEFAULT_BTN_EXTURL,
      KS_DEFAULT_BTN_DOWNLOAD,
      KS_DEFAULT_BTN_CLOSE
    ]
  };

  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  openImageModalRowDescription(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.allImages);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  openGallery(val) {
    this.customizer = val
  }

  ngOnInit() {
  }

}
