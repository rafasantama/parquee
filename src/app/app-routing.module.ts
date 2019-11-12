import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { ElementsComponent } from './elements/elements.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FeaturesComponent } from './features/features.component'
import { ShopComponent } from './shop/shop.component'
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
    loadChildren: './blog/blog.module#BlogModule',
    data: {
      breadcrumb: "Blog"
    }
  },
  {
    path: 'page',
    component: PagesComponent,
    loadChildren: './pages/pages.module#PagesModule',
    data: {
      breadcrumb: "Pages"
    }
  },
  {
    path: 'elements',
    component: ElementsComponent,
    loadChildren: './elements/elements.module#ElementsModule',
    data: {
      breadcrumb: "Elements"
    }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    loadChildren: './portfolio/portfolio.module#PortfolioModule',
    data: {
      breadcrumb: "Portfolio"
    }
  }
  ,
  {
    path: 'shop',
    component: ShopComponent,
    loadChildren: './shop/shop.module#ShopModule',
    data: {
      breadcrumb: "Shop"
    }
  },
  {
    path: 'features',
    component: FeaturesComponent,
    loadChildren: './features/features.module#FeaturesModule',
    data: {
      breadcrumb: "Features"
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
