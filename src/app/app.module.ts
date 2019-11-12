import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutsModule } from './layouts/layouts.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogModule } from './blog/blog.module';
import { PagesModule } from './pages/pages.module';
import { ElementsModule } from './elements/elements.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { FeaturesModule } from './features/features.module'
import { ShopModule } from './shop/shop.module'
import { HttpClientModule } from '@angular/common/http'; 
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    BlogModule,
    PagesModule,
    ElementsModule,
    PortfolioModule,
    ShopModule,
    FeaturesModule,
    HttpClientModule,
    CarouselModule,
    ScrollToModule,
    SharedModule,
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
