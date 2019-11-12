import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsModule } from '../layouts/layouts.module'

//Header Style
import { TransparentHeaderComponent } from './header-style/transparent-header/transparent-header.component';
import { LightHeaderComponent } from './header-style/light-header/light-header.component';
import { DarkHeaderComponent } from './header-style/dark-header/dark-header.component';
import { HeaderRightNavigationComponent } from './header-style/header-right-navigation/header-right-navigation.component';
import { HeaderCenterLogoComponent } from './header-style/header-center-logo/header-center-logo.component';
import { FooterDefaultComponent } from './footer-style/footer-default/footer-default.component';
import { FooterLightComponent } from './footer-style/footer-light/footer-light.component';
import { FooterDarkComponent } from './footer-style/footer-dark/footer-dark.component';
import { FooterLight2Component } from './footer-style/footer-light2/footer-light2.component';
import { FooterDark2Component } from './footer-style/footer-dark2/footer-dark2.component';
import { FooterLight3Component } from './footer-style/footer-light3/footer-light3.component';
import { FooterDark3Component } from './footer-style/footer-dark3/footer-dark3.component';
import { ContentComponent } from './footer-style/widgets/content/content.component';
import { BreadcrumbLeftComponent } from './breadcrumb/breadcrumb-left/breadcrumb-left.component';
import { BreadcrumbRightComponent } from './breadcrumb/breadcrumb-right/breadcrumb-right.component';
import { BreadcrumbCenterComponent } from './breadcrumb/breadcrumb-center/breadcrumb-center.component';
import { BreadcrumbDarkComponent } from './breadcrumb/breadcrumb-dark/breadcrumb-dark.component';
import { BreadcrumbBigTypographyComponent } from './breadcrumb/breadcrumb-big-typography/breadcrumb-big-typography.component';
import { BreadcrumbParallexBgComponent } from './breadcrumb/breadcrumb-parallex-bg/breadcrumb-parallex-bg.component';
import { BreadcrumbBgComponent } from './breadcrumb/breadcrumb-bg/breadcrumb-bg.component';
import { BreadcrumbGalleryComponent } from './breadcrumb/breadcrumb-gallery/breadcrumb-gallery.component';
import { BreadcrumbVideoComponent } from './breadcrumb/breadcrumb-video/breadcrumb-video.component';
import { breadcrumbLayoutContentComponent } from './breadcrumb/widget/breadcrumb-layout-content/breadcrumb-layout-content.component';
import { ZoomGalleryComponent } from './gallery/zoom-gallery/zoom-gallery.component';
import { FormPopupComponent } from './gallery/form-popup/form-popup.component';
import { ModalPopupComponent } from './gallery/modal-popup/modal-popup.component';
import { YoutubePopupComponent } from './gallery/youtube-popup/youtube-popup.component';
import { MapPopupComponent } from './gallery/map-popup/map-popup.component';

@NgModule({
  declarations: [TransparentHeaderComponent, LightHeaderComponent, DarkHeaderComponent, HeaderRightNavigationComponent, HeaderCenterLogoComponent, FeaturesComponent, FooterDefaultComponent, FooterLightComponent, FooterDarkComponent, FooterLight2Component, FooterDark2Component, FooterLight3Component, FooterDark3Component, ContentComponent, BreadcrumbLeftComponent, BreadcrumbRightComponent, BreadcrumbCenterComponent, BreadcrumbDarkComponent, BreadcrumbBigTypographyComponent, BreadcrumbParallexBgComponent, BreadcrumbBgComponent, BreadcrumbGalleryComponent, BreadcrumbVideoComponent, breadcrumbLayoutContentComponent, ZoomGalleryComponent, FormPopupComponent, ModalPopupComponent, YoutubePopupComponent, MapPopupComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    CarouselModule,
    NgbModule,
    LayoutsModule
  ]
})
export class FeaturesModule { }
