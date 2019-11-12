import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LayoutsModule } from '../layouts/layouts.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';

import { PortfolioComponent } from './portfolio.component';
import { BasicTwoGridComponent } from './portfolio-basic/basic-two-grid/basic-two-grid.component';
import { BasicThreeGridComponent } from './portfolio-basic/basic-three-grid/basic-three-grid.component';
import { BasicFourGridComponent } from './portfolio-basic/basic-four-grid/basic-four-grid.component';
import { PortfolioTitleTwoColComponent } from './portfolio-basic/portfolio-title-two-col/portfolio-title-two-col.component';
import { PortfolioTitleThreeColComponent } from './portfolio-basic/portfolio-title-three-col/portfolio-title-three-col.component';
import { PortfolioTitleFourColComponent } from './portfolio-basic/portfolio-title-four-col/portfolio-title-four-col.component';
import { ParallexComponent } from './portfolio-basic/parallex/parallex.component';
import { CenteredSlidesComponent } from './portfolio-basic/centered-slides/centered-slides.component';
import { VerticalSlidesComponent } from './portfolio-basic/vertical-slides/vertical-slides.component';
import { MultipleCarouselComponent } from './portfolio-basic/multiple-carousel/multiple-carousel.component';
import { FullWidthTwoGridComponent } from './portfolio-masonary/full-width-two-grid/full-width-two-grid.component';
import { FullWidthThreeGridComponent } from './portfolio-masonary/full-width-three-grid/full-width-three-grid.component';
import { FullWidthFourGridComponent } from './portfolio-masonary/full-width-four-grid/full-width-four-grid.component';
import { CreativeOneComponent } from './trending-layout/creative-one/creative-one.component';
import { CreativeTwoComponent } from './trending-layout/creative-two/creative-two.component';
import { CreativeThreeComponent } from './trending-layout/creative-three/creative-three.component';
import { CreativeFourComponent } from './trending-layout/creative-four/creative-four.component';
import { ModernFourComponent } from './trending-layout/modern-four/modern-four.component';
import { ModernThreeComponent } from './trending-layout/modern-three/modern-three.component';
import { ModernTwoComponent } from './trending-layout/modern-two/modern-two.component';
import { PortfolioDetailOneComponent } from './portfolio-detail/portfolio-detail-one/portfolio-detail-one.component';
import { PortfolioDetailTwoComponent } from './portfolio-detail/portfolio-detail-two/portfolio-detail-two.component';
import { PortfolioDetailThreeComponent } from './portfolio-detail/portfolio-detail-three/portfolio-detail-three.component';
import { PortfolioDetailFourComponent } from './portfolio-detail/portfolio-detail-four/portfolio-detail-four.component';
import { PortfolioDetailFiveComponent } from './portfolio-detail/portfolio-detail-five/portfolio-detail-five.component';
import { PortfolioDetailSixComponent } from './portfolio-detail/portfolio-detail-six/portfolio-detail-six.component';

@NgModule({
  declarations: [PortfolioComponent, BasicTwoGridComponent, BasicThreeGridComponent, BasicFourGridComponent, PortfolioTitleTwoColComponent, PortfolioTitleThreeColComponent, PortfolioTitleFourColComponent, ParallexComponent, CenteredSlidesComponent, VerticalSlidesComponent, MultipleCarouselComponent, FullWidthTwoGridComponent, FullWidthThreeGridComponent, FullWidthFourGridComponent, CreativeOneComponent, CreativeTwoComponent, CreativeThreeComponent, CreativeFourComponent, ModernFourComponent, ModernThreeComponent, ModernTwoComponent, PortfolioDetailOneComponent, PortfolioDetailTwoComponent, PortfolioDetailThreeComponent, PortfolioDetailFourComponent, PortfolioDetailFiveComponent, PortfolioDetailSixComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    CarouselModule,
    LayoutsModule,
    NgxMasonryModule,
    MasonryGalleryModule
  ]
})
export class PortfolioModule { }
