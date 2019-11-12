import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColumnNoSidebarComponent } from './blog-grid/column-no-sidebar/column-no-sidebar.component';
import { ColumnLeftSidebarComponent } from './blog-grid/column-left-sidebar/column-left-sidebar.component';
import { ColumnRightSidebarComponent } from './blog-grid/column-right-sidebar/column-right-sidebar.component';
import { ClassicNoSidebarComponent } from './blog-grid/classic-no-sidebar/classic-no-sidebar.component';
import { ClassicRightSidebarComponent } from './blog-grid/classic-right-sidebar/classic-right-sidebar.component';
import { ClassicLeftSidebarComponent } from './blog-grid/classic-left-sidebar/classic-left-sidebar.component';

import { ListNoSidebarComponent } from './blog-list/list-no-sidebar/list-no-sidebar.component';
import { ListLeftSidebarComponent } from './blog-list/list-left-sidebar/list-left-sidebar.component';
import { ListRightSidebarComponent } from './blog-list/list-right-sidebar/list-right-sidebar.component';
import { SplitNoSidebarComponent } from './blog-list-creative/split-no-sidebar/split-no-sidebar.component';
import { SplitLeftSidebarComponent } from './blog-list-creative/split-left-sidebar/split-left-sidebar.component';
import { SplitRightSidebarComponent } from './blog-list-creative/split-right-sidebar/split-right-sidebar.component';

import { BigpostSplitComponent } from './blog-mix-layout/bigpost-split/bigpost-split.component';
import { BigpostSplitNoSidebarComponent } from './blog-mix-layout/bigpost-split-no-sidebar/bigpost-split-no-sidebar.component';
import { BigpostListComponent } from './blog-mix-layout/bigpost-list/bigpost-list.component';
import { BigpostListNoSidebarComponent } from './blog-mix-layout/bigpost-list-no-sidebar/bigpost-list-no-sidebar.component';
import { BigpostColumnNoSidebarComponent } from './blog-mix-layout/bigpost-column-no-sidebar/bigpost-column-no-sidebar.component';
import { BigpostColumnComponent } from './blog-mix-layout/bigpost-column/bigpost-column.component';

import { TwoColMasonaryComponent } from './blog-masonary/full-width-two-column/full-width-two-column.component';
import { FullwidthThreeColumnComponent } from './blog-masonary/fullwidth-three-column/fullwidth-three-column.component';
import { FullwidthFourColumnComponent } from './blog-masonary/fullwidth-four-column/fullwidth-four-column.component';
import { MasonaryLeftSidebarComponent } from './blog-masonary/masonary-left-sidebar/masonary-left-sidebar.component';
import { MasonaryRightSidebarComponent } from './blog-masonary/masonary-right-sidebar/masonary-right-sidebar.component';
import { MasonaryNoSidebarComponent } from './blog-masonary/masonary-no-sidebar/masonary-no-sidebar.component';

import { DetailComponent } from './blog-detail/detail/detail.component';
import { DetailGalleryComponent } from './blog-detail/detail-gallery/detail-gallery.component';
import { DetailVideoComponent } from './blog-detail/detail-video/detail-video.component';
import { DetailNoSidebarComponent } from './blog-detail/detail-no-sidebar/detail-no-sidebar.component';
import { DetailLeftSidebarComponent } from './blog-detail/detail-left-sidebar/detail-left-sidebar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'blog-grid/column-no-sidebar',
        component: ColumnNoSidebarComponent,
        data: {
          title: "BLOG WITH LEFT-SIDEBAR",
          breadcrumb: "Blog Grid View / No Sidebar"
        }
      },
      {
        path: 'blog-grid/column-left-sidebar',
        component: ColumnLeftSidebarComponent,
        data: {
          title: "BLOG WITH LEFT-SIDEBAR",
          breadcrumb: "Blog Grid View / Left Sidebar"
        }
      },
      {
        path: 'blog-grid/column-right-sidebar',
        component: ColumnRightSidebarComponent,
        data: {
          title: "BLOG WITH RIGHT-SIDEBAR",
          breadcrumb: "Blog Grid View / Right Sidebar"
        }
      },
      {
        path: 'blog-grid/classic-no-sidebar',
        component: ClassicNoSidebarComponent,
        data: {
          title: "BLOG WITH FULL WIDTH No-SIDEBAR",
          breadcrumb: "Blog Grid View / Full Width No Sidebar"
        }
      },
      {
        path: 'blog-grid/classic-right-sidebar',
        component: ClassicRightSidebarComponent,
        data: {
          title: "BLOG WITH FULL WIDTH Right-SIDEBAR",
          breadcrumb: "Blog Grid View / Full Width Right Sidebar"
        }
      },
      {
        path: 'blog-grid/classic-left-sidebar',
        component: ClassicLeftSidebarComponent,
         data: {
          title: "BLOG WITH LEFT-SIDEBAR",
          breadcrumb: "Blog Grid View / Left Sidebar"
        }
      },
      {
        path: 'blog-list/list-no-sidebar',
        component: ListNoSidebarComponent,
         data: {
          title: "BLOG WITH No -SIDEBAR",
          breadcrumb: "Blog List View / No Sidebar"
        }
      },
      {
        path: 'blog-list/list-left-sidebar',
        component: ListLeftSidebarComponent,
         data: {
          title: "BLOG WITH LEFT-SIDEBAR",
          breadcrumb: "Blog List View / Left Sidebar"
        }
      },
      {
        path: 'blog-list/list-right-sidebar',
        component: ListRightSidebarComponent,
        data: {
          title: "BLOG WITH Right-SIDEBAR",
          breadcrumb: "Blog List View / Right Sidebar"
        }
      },
      {
        path: 'blog-list-creative/split-no-sidebar',
        component: SplitNoSidebarComponent,
        data: {
          title: "BLOG WITH No -SIDEBAR",
          breadcrumb: "Blog List Creative / No Sidebar"
        }
      },
      {
        path: 'blog-list-creative/split-left-sidebar',
        component: SplitLeftSidebarComponent,
        data: {
          title: "BLOG WITH LEFT-SIDEBAR",
          breadcrumb: "Blog List Creative / Left Sidebar"
        }
      },
      {
        path: 'blog-list-creative/split-right-sidebar',
        component: SplitRightSidebarComponent,
        data: {
          title: "BLOG WITH Right-SIDEBAR",
          breadcrumb: "Blog List Creative / Right Sidebar"
        }
      },
      {
        path: 'blog-mix-layout/bigpost-list',
        component: BigpostListComponent,
        data: {
          title: "BLOG WITH Left -SIDEBAR",
          breadcrumb: "Blog Mix Layout / Left Sidebar"
        }
      },
      {
        path: 'blog-mix-layout/bigpost-split',
        component: BigpostSplitComponent,
        data: {
          title: "BLOG WITH Right-SIDEBAR",
          breadcrumb: "Blog Mix Layout / Right Sidebar"
        }
      },
      {
        path: 'blog-mix-layout/bigpost-split-no-sidebar',
        component: BigpostSplitNoSidebarComponent,
        data: {
          title: "BLOG WITH No -SIDEBAR",
          breadcrumb: "Blog Mix Layout / No Sidebar"
        }
      },
      {
        path: 'blog-mix-layout/bigpost-list-no-sidebar',
        component: BigpostListNoSidebarComponent,
        data: {
          title: "BLOG WITH Full width No -SIDEBAR",
          breadcrumb: "Blog Mix Layout / No Sidebar"
        }
      },
      {
        path: 'blog-mix-layout/bigpost-column-no-sidebar',
        component: BigpostColumnNoSidebarComponent,
        data: {
          title: "BLOG WITH No -SIDEBAR",
          breadcrumb: "Blog Mix Layout / No Sidebar"
        }
      },
      {
        path: 'blog-mix-layout/bigpost-column',
        component: BigpostColumnComponent,
        data: {
          title: "BLOG WITH Right -SIDEBAR",
          breadcrumb: "Blog Mix Layout / Grid Mix With Right Sidebar"
        }
      },
      {
        path: 'blog-detail/detail-left-sidebar',
        component: DetailLeftSidebarComponent ,
        data: {
          title: "BLOG WITH Left -SIDEBAR",
          breadcrumb: "Blog Details / Left Sidebar"
        }
      },
      {
        path: 'blog-detail/detail',
        component: DetailComponent,
        data: {
          title: "BLOG WITH Right -SIDEBAR",
          breadcrumb: "Blog Details / Right Sidebar"
        }
      },
      {
        path: 'blog-detail/detail-no-sidebar',
        component: DetailNoSidebarComponent,
        data: {
          title: "BLOG WITH No -SIDEBAR",
          breadcrumb: "Blog Details / No Sidebar"
        }
      },
      {
        path: 'blog-detail/detail-gallery',
        component: DetailGalleryComponent,
        data: {
          title: "BLOG WITH Gallery",
          breadcrumb: "Blog Details / Detail With Gallery"
        }
      },
      {
        path: 'blog-detail/detail-video',
        component: DetailVideoComponent,
        data: {
          title: "BLOG WITH Video",
          breadcrumb: "Blog Details / Detail With Video"
        }
      },
      {
        path: 'blog-masonary/fullwidth-2',
        component: TwoColMasonaryComponent,
        data: {
          title: "BLOG WITH 2-COLUMNS",
          breadcrumb: "Blog Masonry / 2 Columns"
        }
      },
      {
        path: 'blog-masonary/fullwidth-3',
        component: FullwidthThreeColumnComponent,
        data: {
          title: "BLOG WITH 3-COLUMNS",
          breadcrumb: "Blog Masonry / 3 Columns"
        }
      },
      {
        path: 'blog-masonary/fullwidth-4',
        component: FullwidthFourColumnComponent,
        data: {
          title: "BLOG WITH 4-COLUMNS",
          breadcrumb: "Blog Masonry / 4 Columns"
        }
      },
      {
        path: 'blog-masonary/masonary-left-sidebar',
        component: MasonaryLeftSidebarComponent,
        data: {
          title: "BLOG WITH Left Sidebar",
          breadcrumb: "Blog Masonry / Left Sidebar"
        }
      },
      {
        path: 'blog-masonary/masonary-right-sidebar',
        component: MasonaryRightSidebarComponent,
        data: {
          title: "BLOG WITH Right Sidebar",
          breadcrumb: "Blog Masonry / Right Sidebar"
        }
      },
      {
        path: 'blog-masonary/masonary-no-sidebar',
        component: MasonaryNoSidebarComponent,
        data: {
          title: "BLOG WITH No Sidebar",
          breadcrumb: "Blog Masonry / No Sidebar"
        }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
