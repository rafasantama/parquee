import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {
    path: 'collection-left-sidebar/:category',
    component: LeftSidebarComponent,
    data: {
      title: "Collection Left Sidebar",
      breadcrumb: "Collection Left Sidebar"
    }
  },
  {
    path: 'collection-right-sidebar/:category',
    component: RightSidebarComponent,
    data: {
      title: "Collection Right Sidebar",
      breadcrumb: "Collection Right Sidebar"
    }
  },
  {
    path: 'collection-no-sidebar/:category',
    component: NoSidebarComponent,
    data: {
      title: "Collection No Sidebar",
      breadcrumb: "Collection No Sidebar"
    }
  },
  {
    path: 'collection-left-sidebar-two-grid/:category',
    component: LeftSidebarTwoGridComponent,
    data: {
      title: "Collection Left Sidebar Two Grid",
      breadcrumb: "Collection Left Sidebar Two Grid"
    }
  },
  {
    path: 'collection-left-sidebar-three-grid/:category',
    component: LeftSidebarThreeGridComponent,
    data: {
      title: "Collection Left Sidebar three Grid",
      breadcrumb: "Collection Left Sidebar Three Grid"
    }
  },
  {
    path: 'collection-right-sidebar-two-grid/:category',
    component: RightSidebarTwoGridComponent,
    data: {
      title: "Collection right Sidebar Two Grid",
      breadcrumb: "Collection Right Sidebar Two Grid"
    }
  },
  {
    path: 'collection-right-sidebar-three-grid/:category',
    component: RightSidebarThreeGridComponent,
    data: {
      title: "Collection right Sidebar three Grid",
      breadcrumb: "Collection Right Sidebar Three Grid"
    }
  },
  {
    path: 'collection-no-sidebar-two-grid/:category',
    component: NoSidebarTwoGridComponent,
    data: {
      title: "Collection no Sidebar Two Grid",
      breadcrumb: "Collection No Sidebar Two Grid"
    }
  },
  {
    path: 'collection-no-sidebar-three-grid/:category',
    component: NoSidebarThreeGridComponent,
    data: {
      title: "Collection no Sidebar three Grid",
      breadcrumb: "Collection No Sidebar Three Grid"
    }
  },
  {
    path: 'metro/:category',
    component: CategoryMetroComponent,
    data: {
      title: "Collection Metro",
      breadcrumb: "Collection Metro"
    }
  },
  {
    path: 'no-sidebar/:id',
    component: ProductNoSidebarComponent,
    data: {
      title: "Product Detail",
      breadcrumb: "Product Detail - No Sidebar"
    }
  },
  {
    path: 'left-sidebar/:id',
    component: ProductLeftSidebarComponent,
    data: {
      title: "Product Detail",
      breadcrumb: "Product Detail-Left-Sidebar"
    }
  },
  {
    path: 'right-sidebar/:id',
    component: ProductRightSidebarComponent,
    data: {
      title: "Product Detail",
      breadcrumb: "Product Detail-Right-Sidebar"
    }
  },
  {
    path: 'three-grid/:id',
    component: ThreeGridComponent,
    data: {
      title: "Product Detail",
      breadcrumb: "Product Detail - Three Grid"
    }
  },
  {
    path: 'accordian/:id',
    component: AccordianComponent,
    data: {
      title: "Product Detail",
      breadcrumb: "Product Detail With Accordian"
    }
  },
  {
    path: 'bundle/:id',
    component: BundleComponent,
    data: {
      title: "Product Detail",
      breadcrumb: "Product Detail With Bundle Product"
    }
  },
  {
    path: 'image-swatch/:id',
    component: ImageSwatchComponent,
    data: {
      title: "Product Detail",
      breadcrumb: "Product Detail With Swatch Image"
    }
  },
  {
    path: 'image-outside/:id',
    component: ImageOutsideComponent,
    data: {
      title: "Product Detail",
      breadcrumb: "Product Detail With Outside Nav Slider"
    }
  },
  {
    path: 'image-sticky/:id',
    component: ImageStickyComponent,
    data: {
      title: "Product Detail",
      breadcrumb: "Product Detail With Sticky Image"
    }
  },
  {
    path: 'cart',
    component: AddToCartComponent,
    data: {
      title: "Add to cart",
      breadcrumb: "Add to cart"
    }
  },
  {
    path: 'checkout',
    component: CheckOutComponent,
    data: {
      title: "Checkout",
      breadcrumb: "Checkout"
    }
  },
  {
    path: 'compare',
    component: CompareProductComponent,
    data: {
      title: "Compare",
      breadcrumb: "Compare"
    }
  },
  {
    path: 'signup',
    component: SignUpComponent,
    data: {
      title: "Signup",
      breadcrumb: "Sign Up"
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: "Login",
      breadcrumb: "Login"
    }
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    data: {
      title: "Wishlist",
      breadcrumb: "Wishlist"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {

}
