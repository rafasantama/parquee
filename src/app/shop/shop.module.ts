import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from '../layouts/layouts.module';
import { SharedModule } from '../shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { LeftSidebarComponent } from './shop-categories/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './shop-categories/right-sidebar/right-sidebar.component';
import { NoSidebarComponent } from './shop-categories/no-sidebar/no-sidebar.component';
import { LeftSidebarTwoGridComponent } from './shop-categories/left-sidebar-two-grid/left-sidebar-two-grid.component';
import { LeftSidebarThreeGridComponent } from './shop-categories/left-sidebar-three-grid/left-sidebar-three-grid.component';
import { RightSidebarTwoGridComponent } from './shop-categories/right-sidebar-two-grid/right-sidebar-two-grid.component';
import { RightSidebarThreeGridComponent } from './shop-categories/right-sidebar-three-grid/right-sidebar-three-grid.component';
import { NoSidebarTwoGridComponent } from './shop-categories/no-sidebar-two-grid/no-sidebar-two-grid.component';
import { NoSidebarThreeGridComponent } from './shop-categories/no-sidebar-three-grid/no-sidebar-three-grid.component';
import { CategoryMetroComponent } from './shop-categories/category-metro/category-metro.component';
import { ProductRightSidebarComponent } from './product-pages/product-right-sidebar/product-right-sidebar.component';
import { ProductLeftSidebarComponent } from './product-pages/product-left-sidebar/product-left-sidebar.component';
import { ProductNoSidebarComponent } from './product-pages/product-no-sidebar/product-no-sidebar.component';
import { ThreeGridComponent } from './product-pages/three-grid/three-grid.component';
import { AccordianComponent } from './product-pages/accordian/accordian.component';
import { BundleComponent } from './product-pages/bundle/bundle.component';
import { ImageSwatchComponent } from './product-pages/image-swatch/image-swatch.component';
import { ImageOutsideComponent } from './product-pages/image-outside/image-outside.component';
import { ImageStickyComponent } from './product-pages/image-sticky/image-sticky.component';
import { CheckOutComponent } from './shop-pages/check-out/check-out.component';
import { SignUpComponent } from './shop-pages/sign-up/sign-up.component';
import { LoginComponent } from './shop-pages/login/login.component';
import { WishlistComponent } from './shop-pages/wishlist/wishlist.component';
import { AddToCartComponent } from './shop-pages/add-to-cart/add-to-cart.component';
import { CompareProductComponent } from './shop-pages/compare-product/compare-product.component';

@NgModule({
  declarations: [ShopComponent, LeftSidebarComponent, RightSidebarComponent, NoSidebarComponent, LeftSidebarTwoGridComponent, LeftSidebarThreeGridComponent, RightSidebarTwoGridComponent, RightSidebarThreeGridComponent, NoSidebarTwoGridComponent, NoSidebarThreeGridComponent, CategoryMetroComponent, ProductRightSidebarComponent, ProductLeftSidebarComponent, ProductNoSidebarComponent, ThreeGridComponent, AccordianComponent, BundleComponent, ImageSwatchComponent, ImageOutsideComponent, ImageStickyComponent, CheckOutComponent, SignUpComponent, LoginComponent, WishlistComponent, AddToCartComponent, CompareProductComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    LayoutsModule,
    NgbModule,
    CarouselModule
  ]
})
export class ShopModule { }
