import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { FooterDark3Component } from './footer-style/footer-dark3/footer-dark3.component';
import { BreadcrumbLeftComponent } from './breadcrumb/breadcrumb-left/breadcrumb-left.component';
import { BreadcrumbRightComponent } from './breadcrumb/breadcrumb-right/breadcrumb-right.component';
import { BreadcrumbCenterComponent } from './breadcrumb/breadcrumb-center/breadcrumb-center.component';
import { BreadcrumbDarkComponent } from './breadcrumb/breadcrumb-dark/breadcrumb-dark.component';
import { BreadcrumbBigTypographyComponent } from './breadcrumb/breadcrumb-big-typography/breadcrumb-big-typography.component';
import { BreadcrumbParallexBgComponent } from './breadcrumb/breadcrumb-parallex-bg/breadcrumb-parallex-bg.component';
import { BreadcrumbBgComponent } from './breadcrumb/breadcrumb-bg/breadcrumb-bg.component';
import { BreadcrumbGalleryComponent } from './breadcrumb/breadcrumb-gallery/breadcrumb-gallery.component';
import { BreadcrumbVideoComponent } from './breadcrumb/breadcrumb-video/breadcrumb-video.component';
import { ZoomGalleryComponent } from './gallery/zoom-gallery/zoom-gallery.component';
import { FormPopupComponent } from './gallery/form-popup/form-popup.component';
import { ModalPopupComponent } from './gallery/modal-popup/modal-popup.component';
import { YoutubePopupComponent } from './gallery/youtube-popup/youtube-popup.component';
import { MapPopupComponent } from './gallery/map-popup/map-popup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'header-transparent',
        component: TransparentHeaderComponent,
      }, 
      {
        path: 'header-light',
        component: LightHeaderComponent
      },
      {
        path: 'header-dark',
        component: DarkHeaderComponent
      },
      {
        path: 'header-right-navigation',
        component: HeaderRightNavigationComponent
      },
      {
        path: 'header-center-logo',
        component: HeaderCenterLogoComponent
      },
      {
        path: 'footer-default',
        component: FooterDefaultComponent,
        data: {
          title: "footer-default",
          breadcrumb: "Footer-default"
        }
      },
      {
        path: 'footer-light',
        component: FooterLightComponent,
        data: {
          title: "footer-light",
          breadcrumb: "Footer-light"
        }
      },  
      {
        path: 'footer-dark',
        component: FooterDarkComponent,
        data: {
          title: "footer-dark",
          breadcrumb: "Footer-dark"
        }
      },
      {
        path: 'footer-light2',
        component: FooterLight2Component,
        data: {
          title: "footer- Dark Light",
          breadcrumb: "Footer Dark Light"
        }
      },
      {
        path: 'footer-dark2',
        component: FooterDark2Component,
        data: {
          title: "Footer Dark Gradient",
          breadcrumb: "Footer Dark Gradient"
        }
      },
      {
        path: 'footer-dark3',
        component: FooterDark3Component,
        data: {
          title: "Footer Creative",
          breadcrumb: "Footer Creative"
        }
      },
      {
        path: 'breadcrumb-left',
        component: BreadcrumbLeftComponent
      },
      {
        path: 'breadcrumb-right',
        component: BreadcrumbRightComponent
      },
      {
        path: 'breadcrumb-center',
        component: BreadcrumbCenterComponent,
        data: {
          title: "FEATURES WITH BREADCRUMB CENTER",
          breadcrumb: "Breadcrumb Center"
        }
      },
      {
        path: 'breadcrumb-dark',
        component: BreadcrumbDarkComponent,
        data: {
          title: "FEATURES WITH Dark BREADCRUMB",
          breadcrumb: "Dark Breadcrumb"
        }
      },
      {
        path: 'breadcrumb-big-typography',
        component: BreadcrumbBigTypographyComponent,
        data: {
          title: "Breadcrumb",
          breadcrumb: "Classic Type"
        }
      },
      {
        path: 'breadcrumb-parallex-bg',
        component: BreadcrumbParallexBgComponent,
        data: {
          title: "FEATURES WITH Breadcrumb Parallex",
          breadcrumb: "Breadcrumb Parallex"
        }
      },
      {
        path: 'breadcrumb-bg',
        component: BreadcrumbBgComponent,
        data: {
          title: "FEATURES WITH Breadcrumb Background",
          breadcrumb: "Breadcrumb Background"
        }
      },
      {
        path: 'breadcrumb-gallery',
        component: BreadcrumbGalleryComponent
      },
      {
        path: 'breadcrumb-video',
        component: BreadcrumbVideoComponent
      },
      {
        path: 'zoom-gallery',
        component: ZoomGalleryComponent,
        data: {
          title: "Zoom Gallery",
          breadcrumb: "Zoom Gallery"
        }
      },
      {
        path: 'form-popup',
        component: FormPopupComponent,
        data: {
          title: "form-popup",
          breadcrumb: "Form Popup"
        }
      },
      {
        path: 'modal-popup',
        component: ModalPopupComponent,
        data: {
          title: "modal-popup",
          breadcrumb: "Modal-Popup"
        }
      },
      {
        path: 'youtube-popup',
        component: YoutubePopupComponent,
        data: {
          title: "youtube-popup",
          breadcrumb: "Youtube-Popup"
        }
      },
      {
        path: 'map-popup',
        component: MapPopupComponent,
        data: {
          title: "Map-Popup",
          breadcrumb: "Map-Popup"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
