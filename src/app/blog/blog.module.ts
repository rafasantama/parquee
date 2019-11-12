import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { NgxMasonryModule } from 'ngx-masonry';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ColumnNoSidebarComponent } from './blog-grid/column-no-sidebar/column-no-sidebar.component';
import { SidebarComponent } from './widgets/sidebar/sidebar.component';

import { ColumnLeftSidebarComponent } from './blog-grid/column-left-sidebar/column-left-sidebar.component';
import { ColumnRightSidebarComponent } from './blog-grid/column-right-sidebar/column-right-sidebar.component';
import { ClassicNoSidebarComponent } from './blog-grid/classic-no-sidebar/classic-no-sidebar.component';
import { ClassicRightSidebarComponent } from './blog-grid/classic-right-sidebar/classic-right-sidebar.component';
import { ClassicLeftSidebarComponent } from './blog-grid/classic-left-sidebar/classic-left-sidebar.component';
import { BigpostSplitComponent } from './blog-mix-layout/bigpost-split/bigpost-split.component';

import { ListNoSidebarComponent } from './blog-list/list-no-sidebar/list-no-sidebar.component';
import { ListLeftSidebarComponent } from './blog-list/list-left-sidebar/list-left-sidebar.component';
import { ListRightSidebarComponent } from './blog-list/list-right-sidebar/list-right-sidebar.component';
import { SplitNoSidebarComponent } from './blog-list-creative/split-no-sidebar/split-no-sidebar.component';
import { SplitLeftSidebarComponent } from './blog-list-creative/split-left-sidebar/split-left-sidebar.component';
import { SplitRightSidebarComponent } from './blog-list-creative/split-right-sidebar/split-right-sidebar.component';

import { BigpostSplitNoSidebarComponent } from './blog-mix-layout/bigpost-split-no-sidebar/bigpost-split-no-sidebar.component';
import { BigpostListComponent } from './blog-mix-layout/bigpost-list/bigpost-list.component';
import { BigpostListNoSidebarComponent } from './blog-mix-layout/bigpost-list-no-sidebar/bigpost-list-no-sidebar.component';
import { BigpostColumnNoSidebarComponent } from './blog-mix-layout/bigpost-column-no-sidebar/bigpost-column-no-sidebar.component';
import { BigpostColumnComponent } from './blog-mix-layout/bigpost-column/bigpost-column.component';

import { FullwidthFourColumnComponent } from './blog-masonary/fullwidth-four-column/fullwidth-four-column.component';
import { FullwidthThreeColumnComponent } from './blog-masonary/fullwidth-three-column/fullwidth-three-column.component';
import { MasonaryLeftSidebarComponent } from './blog-masonary/masonary-left-sidebar/masonary-left-sidebar.component';
import { MasonaryRightSidebarComponent } from './blog-masonary/masonary-right-sidebar/masonary-right-sidebar.component';
import { MasonaryNoSidebarComponent } from './blog-masonary/masonary-no-sidebar/masonary-no-sidebar.component';
import { TwoColMasonaryComponent } from './blog-masonary/full-width-two-column/full-width-two-column.component';

import { DetailComponent } from './blog-detail/detail/detail.component';
import { DetailGalleryComponent } from './blog-detail/detail-gallery/detail-gallery.component';
import { DetailVideoComponent } from './blog-detail/detail-video/detail-video.component';
import { DetailNoSidebarComponent } from './blog-detail/detail-no-sidebar/detail-no-sidebar.component';
import { DetailLeftSidebarComponent } from './blog-detail/detail-left-sidebar/detail-left-sidebar.component';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';

@NgModule({
  declarations: [BlogComponent, ColumnNoSidebarComponent, SidebarComponent, ColumnLeftSidebarComponent, ColumnRightSidebarComponent, ListNoSidebarComponent, ListLeftSidebarComponent, ListRightSidebarComponent, SplitNoSidebarComponent, SplitLeftSidebarComponent, SplitRightSidebarComponent, ClassicNoSidebarComponent, ClassicRightSidebarComponent, ClassicLeftSidebarComponent, BigpostSplitComponent, BigpostSplitNoSidebarComponent, BigpostListComponent, BigpostListNoSidebarComponent, BigpostColumnNoSidebarComponent, BigpostColumnComponent, FullwidthFourColumnComponent, FullwidthThreeColumnComponent, MasonaryLeftSidebarComponent, MasonaryRightSidebarComponent, MasonaryNoSidebarComponent, DetailComponent, DetailGalleryComponent, DetailVideoComponent, DetailNoSidebarComponent, DetailLeftSidebarComponent, TwoColMasonaryComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    NgxMasonryModule,
    CarouselModule,
    NgbModule,
    MasonryGalleryModule
  ]
})
export class BlogModule { }
