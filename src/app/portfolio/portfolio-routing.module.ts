import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { PortfolioDetailThreeComponent } from './portfolio-detail/portfolio-detail-three/portfolio-detail-three.component'
import { PortfolioDetailFourComponent } from './portfolio-detail/portfolio-detail-four/portfolio-detail-four.component'
import { PortfolioDetailFiveComponent } from './portfolio-detail/portfolio-detail-five/portfolio-detail-five.component'
import { PortfolioDetailSixComponent } from './portfolio-detail/portfolio-detail-six/portfolio-detail-six.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic-2-grid',
        component: BasicTwoGridComponent,
        data: {
          title: "PORTFOLIO WITH BASIC-2 GRID",
          breadcrumb: "Basic - 2 Grid"
        }
      },
      {
        path: 'basic-3-grid',
        component: BasicThreeGridComponent,
        data: {
          title: "PORTFOLIO WITH BASIC-3 GRID",
          breadcrumb: "Basic - 3 Grid"
        }
      },
      {
        path: 'basic-4-grid',
        component: BasicFourGridComponent,
        data: {
          title: "PORTFOLIO WITH BASIC-4 GRID",
          breadcrumb: "Basic - 4 Grid"
        }
      },
      {
        path: 'portfolio-title-2-col',
        component: PortfolioTitleTwoColComponent,
        data: {
          title: "PORTFOLIO WITH BASIC-2 GRID",
          breadcrumb: "Basic - 2 Grid With Title"
        }
      },
      {
        path: 'portfolio-title-3-col',
        component: PortfolioTitleThreeColComponent,
        data: {
          title: "PORTFOLIO WITH BASIC-3 GRID",
          breadcrumb: "Basic - 3 Grid With Title"
        }
      },
      {
        path: 'portfolio-title-4-col',
        component: PortfolioTitleFourColComponent,
        data: {
          title: "PORTFOLIO WITH BASIC-4 GRID",
          breadcrumb: "Basic - 4 Grid With Title"
        }
      },
      {
        path: 'portfolio-parallex',
        component: ParallexComponent
      },
      {
        path: 'centered-slide',
        component: CenteredSlidesComponent,
      },
      {
        path: 'vertical-slide',
        component: VerticalSlidesComponent,
      },
      {
        path: 'multiple-carousel',
        component: MultipleCarouselComponent
      },
      {
        path: 'portfolio-detail-1',
        component: PortfolioDetailOneComponent,
        data: {
          title: "Container Layout",
          breadcrumb: "Container Layout"
        }
      },
      {
        path: 'portfolio-detail-2',
        component: PortfolioDetailTwoComponent,
        data: {
          title: "Full Width",
          breadcrumb: "Full Width"
        }
      },
      {
        path: 'portfolio-detail-3',
        component: PortfolioDetailThreeComponent,
        data: {
          title: "With Bg Bredcrumb",
          breadcrumb: "Full Width"
        }
      },
      {
        path: 'portfolio-detail-4',
        component: PortfolioDetailFourComponent,
        data: {
          title: "Video Portfolio",
          breadcrumb: "Video Portfolio"
        }
      },
      {
        path: 'portfolio-detail-5',
        component: PortfolioDetailFiveComponent,
        data: {
          title: "Two Image Portfolio",
          breadcrumb: "Two Image Portfolio"
        }
      },
        {
          path: 'portfolio-detail-6',
          component: PortfolioDetailSixComponent,
          data: {
            title: "Left Side Image Portfolio",
            breadcrumb: "Left Side Image Portfolio"
          }
      },
      {
        path: 'creative-1',
        component: CreativeOneComponent,
        data: {
          title: "Trending Layout 1",
          breadcrumb: "Trending Layout 1"
        }
      },
      {
        path: 'creative-2',
        component: CreativeTwoComponent,
        data: {
          title: "Trending Layout 2",
          breadcrumb: "Trending Layout 2"
        }
      },
      {
        path: 'creative-3',
        component: CreativeThreeComponent,
        data: {
          title: "Trending Layout 3",
          breadcrumb: "Trending Layout 3"
        }
      },
      {
        path: 'creative-4',
        component: CreativeFourComponent,
        data: {
          title: "Trending Layout 4",
          breadcrumb: "Trending Layout 4"
        }
      },
      {
        path: 'modern-4',
        component: ModernFourComponent,
         data: {
          title: "Trending Layout 5",
          breadcrumb: "Trending Layout 5"
        }
      },
      {
        path: 'modern-3',
        component: ModernThreeComponent,
         data: {
          title: "Trending Layout 6",
          breadcrumb: "Trending Layout 6"
        }
      },
      {
        path: 'modern-2',
        component: ModernTwoComponent,
         data: {
          title: "Trending Layout 7",
          breadcrumb: "Trending Layout 7"
        }
      },
        {
          path: 'full-width-2-grid',
          component: FullWidthTwoGridComponent,
          data: {
            title: "PORTFOLIO WITH Parallex",
            breadcrumb: "Portfolio-Parallax"
          }
        },
        {
          path: 'full-width-3-grid',
          component: FullWidthThreeGridComponent
        },
        {
          path: 'full-width-4-grid',
          component: FullWidthFourGridComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
