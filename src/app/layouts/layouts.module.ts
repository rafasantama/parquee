import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module'
import { CountToModule } from 'angular-count-to';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { AngularTiltModule } from 'angular-tilt';
import 'hammerjs';
import 'mousetrap';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { Ng5SliderModule } from 'ng5-slider';


//Enterprice Layouts
import { EnterpriceComponent } from './enterprice/enterprice.component';
import { enterpriceNavComponent } from './enterprice/enterprice-nav/enterprice-nav.component';
import { enterpriceHeaderComponent } from './enterprice/enterprice-header/enterprice-header.component';
import { enterpriceServicesComponent } from './enterprice/enterprice-services/enterprice-services.component';
import { enterpriceAboutComponent } from './enterprice/enterprice-about/enterprice-about.component';
import { enterpriceDownloadComponent } from './enterprice/enterprice-download/enterprice-download.component';
import { enterpriceScreenshotsComponent } from './enterprice/enterprice-screenshots/enterprice-screenshots.component';
import { enterpricePricingComponent } from './enterprice/enterprice-pricing/enterprice-pricing.component';
import { enterpriceVideoComponent } from './enterprice/enterprice-video/enterprice-video.component';
import { enterpriceSubscribeComponent } from './enterprice/enterprice-subscribe/enterprice-subscribe.component';
import { enterpriceFooterComponent } from './enterprice/enterprice-footer/enterprice-footer.component';

// Modern Layout
import { ModernComponent } from './modern/modern.component';
import { ModernNavComponent } from './modern/modern-nav/modern-nav.component';
import { ModernHeaderComponent } from './modern/modern-header/modern-header.component';
import { ModernServicesComponent } from './modern/modern-services/modern-services.component';
import { ModernAboutComponent } from './modern/modern-about/modern-about.component';
import { ModernFunctionComponent } from './modern/modern-function/modern-function.component';
import { ModernTeamComponent } from './modern/modern-team/modern-team.component';
import { ModernScreenshotsComponent } from './modern/modern-screenshots/modern-screenshots.component';
import { ModernTeamMemberComponent } from './modern/modern-team-member/modern-team-member.component';
import { ModernPricingComponent } from './modern/modern-pricing/modern-pricing.component';
import { ModernBrandComponent } from './modern/modern-brand/modern-brand.component';
import { ModernSubscribeComponent } from './modern/modern-subscribe/modern-subscribe.component';
import { ModernFooterComponent } from './modern/modern-footer/modern-footer.component';

// Modern SASS Layout
import { ModernSassComponent } from './modern-sass/modern-sass.component';
import { ModernSassNavComponent } from './modern-sass/modern-sass-nav/modern-sass-nav.component';
import { ModernSassHeaderComponent } from './modern-sass/modern-sass-header/modern-sass-header.component';
import { ModernSassFeatureComponent } from './modern-sass/modern-sass-feature/modern-sass-feature.component';
import { ModernSassBusinessComponent } from './modern-sass/modern-sass-business/modern-sass-business.component';
import { ModernSassServicesComponent } from './modern-sass/modern-sass-services/modern-sass-services.component';
import { ModernSassScreenshotsComponent } from './modern-sass/modern-sass-screenshots/modern-sass-screenshots.component';
import { ModernSassPricingComponent } from './modern-sass/modern-sass-pricing/modern-sass-pricing.component';
import { ModernSassTestimonialComponent } from './modern-sass/modern-sass-testimonial/modern-sass-testimonial.component';
import { ModernSassBrandComponent } from './modern-sass/modern-sass-brand/modern-sass-brand.component';
import { ModernSassFooterComponent } from './modern-sass/modern-sass-footer/modern-sass-footer.component';

// Enterprice SASS Layout
import { EnterpriceSassComponent } from './enterprice-sass/enterprice-sass.component';
import { EnterpriceSassNavComponent } from './enterprice-sass/enterprice-sass-nav/enterprice-sass-nav.component';
import { EnterpriceSassHeaderComponent } from './enterprice-sass/enterprice-sass-header/enterprice-sass-header.component';
import { EnterpriceSassFeatureComponent } from './enterprice-sass/enterprice-sass-feature/enterprice-sass-feature.component';
import { EnterpriceSassBuildComponent } from './enterprice-sass/enterprice-sass-build/enterprice-sass-build.component';
import { EnterpriceSassWorkComponent } from './enterprice-sass/enterprice-sass-work/enterprice-sass-work.component';
import { EnterpriceSassPriceComponent } from './enterprice-sass/enterprice-sass-price/enterprice-sass-price.component';
import { EnterpriceSassTestimonialComponent } from './enterprice-sass/enterprice-sass-testimonial/enterprice-sass-testimonial.component';
import { EnterpriceSassSubscribeComponent } from './enterprice-sass/enterprice-sass-subscribe/enterprice-sass-subscribe.component';
import { EnterpriceSassFaqComponent } from './enterprice-sass/enterprice-sass-faq/enterprice-sass-faq.component';
import { EnterpriceSassClientComponent } from './enterprice-sass/enterprice-sass-client/enterprice-sass-client.component';
import { EnterpriceSassFooterComponent } from './enterprice-sass/enterprice-sass-footer/enterprice-sass-footer.component';
import { EnterpriceSassCopyrightComponent } from './enterprice-sass/enterprice-sass-copyright/enterprice-sass-copyright.component';

// Resume Layout
import { ResumeComponent } from './resume/resume.component';
import { ResumeNavComponent } from './resume/resume-nav/resume-nav.component';
import { ResumeHeaderComponent } from './resume/resume-header/resume-header.component';
import { ResumeAboutComponent } from './resume/resume-about/resume-about.component';
import { ResumeServicesComponent } from './resume/resume-services/resume-services.component';
import { ResumePortfolioComponent } from './resume/resume-portfolio/resume-portfolio.component';
import { ResumeCounterComponent } from './resume/resume-counter/resume-counter.component';
import { ResumeScheduleComponent } from './resume/resume-schedule/resume-schedule.component';
import { ResumePricingComponent } from './resume/resume-pricing/resume-pricing.component';
import { ResumeSubscribeComponent } from './resume/resume-subscribe/resume-subscribe.component';
import { ResumeFooterComponent } from './resume/resume-footer/resume-footer.component';

// Agency Layout
import { AgencyComponent } from './agency/agency.component';
import { AgencyNavComponent } from './agency/agency-nav/agency-nav.component';
import { AgencyHeaderComponent } from './agency/agency-header/agency-header.component';
import { AgencyContentComponent } from './agency/agency-content/agency-content.component';
import { AgencyServicesComponent } from './agency/agency-services/agency-services.component';
import { AgencyVideoComponent } from './agency/agency-video/agency-video.component';
import { AgencyCounterComponent } from './agency/agency-counter/agency-counter.component';
import { AgencyPricingComponent } from './agency/agency-pricing/agency-pricing.component';
import { AgencySpeakerComponent } from './agency/agency-speaker/agency-speaker.component';
import { AgencyTestimonialComponent } from './agency/agency-testimonial/agency-testimonial.component';
import { AgencyBlogComponent } from './agency/agency-blog/agency-blog.component';
import { AgencyFooterComponent } from './agency/agency-footer/agency-footer.component';
import { AgencyCopyrightComponent } from './agency/agency-copyright/agency-copyright.component';

//Event Layout
import { EventsComponent } from './events/events.component';
import { EventNavComponent } from './events/event-nav/event-nav.component';
import { EventNavbgComponent } from './events/event-navbg/event-navbg.component';
import { EventHeaderComponent } from './events/event-header/event-header.component';
import { EventBookingComponent } from './events/event-booking/event-booking.component';
import { EventAboutComponent } from './events/event-about/event-about.component';
import { EventSpeakerComponent } from './events/event-speaker/event-speaker.component';
import { EventSponsorComponent } from './events/event-sponsor/event-sponsor.component';
import { EventScheduleComponent } from './events/event-schedule/event-schedule.component';
import { EventTestimonialComponent } from './events/event-testimonial/event-testimonial.component';
import { EventGalleryComponent } from './events/event-gallery/event-gallery.component';
import { EventCounterComponent } from './events/event-counter/event-counter.component';
import { EventFooterComponent } from './events/event-footer/event-footer.component';
import { EventSubscribeComponent } from './events/event-subscribe/event-subscribe.component';
import { EventPricingComponent } from './events/event-pricing/event-pricing.component';
import { EventBlogComponent } from './events/event-blog/event-blog.component';
import { EventContactComponent } from './events/event-contact/event-contact.component';
import { EventCopyrightComponent } from './events/event-copyright/event-copyright.component';
import { ParqueEquipoComponent } from './events/parque-equipo/parque-equipo.component';


//paginas
//Somos Layout
import { SomosComponent } from './somos/somos.component';
import { SomosHeaderComponent } from './somos/somos-header/somos-header.component';
import { SomosServicesComponent } from './somos/somos-services/somos-services.component';
import { SomosContentComponent } from './somos/somos-content/somos-content.component';
import { SomosAboutComponent } from './somos/somos-about/somos-about.component';
//Historia Layout
import { HistoriaComponent } from './historia/historia.component';
import { HistoriaHeaderComponent } from './historia/historia-header/historia-header.component';
import { HistoriaScheduleComponent } from './historia/historia-schedule/historia-schedule.component';
import { HistoriaServicesComponent } from './historia/historia-services/historia-services.component';
//Equipo Layout
import { EquipoComponent } from './equipo/equipo.component';
import { EquipoHeaderComponent } from './equipo/equipo-header/equipo-header.component';
import { EquipoServicesComponent } from './equipo/equipo-services/equipo-services.component';
import { EquipoListComponent } from './equipo/equipo-list/equipo-list.component';
//Registrate Layout
import { RegistrateComponent } from './registrate/registrate.component';
import { RegistrateHeaderComponent } from './registrate/registrate-header/registrate-header.component';
import { RegistrateScheduleComponent } from './registrate/registrate-schedule/registrate-schedule.component';
import { RegistrateBlogComponent } from './registrate/registrate-blog/registrate-blog.component';
import { RegistrateAlbumComponent } from './registrate/registrate-album/registrate-album.component';
import { RegistrateBookingComponent } from './registrate/registrate-booking/registrate-booking.component';
//Historias Layout
import { HistoriasComponent } from './historias/historias.component';
import { HistoriasHeaderComponent } from './historias/historias-header/historias-header.component';
import { HistoriasListaComponent } from './historias/historias-lista/historias-lista.component';
import { HistoriasLeftSidebarComponent } from './historias/historias-left-sidebar/historias-left-sidebar.component';
import { SectorComponent } from './historias/filtro/sector/sector.component';
import { ServiciosComponent } from './historias/filtro/servicios/servicios.component';
//Herramientas Layout
import { HerramientasComponent } from './herramientas/herramientas.component';
import { HerramientasHeaderComponent } from './herramientas/herramientas-header/herramientas-header.component';
//Terminos Layout
import { TerminosComponent } from './terminos/terminos.component';
import { TerminosHeaderComponent } from './terminos/terminos-header/terminos-header.component';
//Politicas Layout
import { PoliticasComponent } from './politicas/politicas.component';
import { PoliticasHeaderComponent } from './politicas/politicas-header/politicas-header.component';


// Gym Layout
import { GymComponent } from './gym/gym.component';
import { GymNavComponent } from './gym/gym-nav/gym-nav.component';
import { GymHeaderComponent } from './gym/gym-header/gym-header.component';
import { GymAboutComponent } from './gym/gym-about/gym-about.component';
import { GymScheduleComponent } from './gym/gym-schedule/gym-schedule.component';
import { GymWorkoutAboutComponent } from './gym/gym-workout-about/gym-workout-about.component';
import { GymCounterComponent } from './gym/gym-counter/gym-counter.component';
import { GymTrainerComponent } from './gym/gym-trainer/gym-trainer.component';
import { GymTestimonialComponent } from './gym/gym-testimonial/gym-testimonial.component';
import { GymPricingComponent } from './gym/gym-pricing/gym-pricing.component';
import { GymBMIComponent } from './gym/gym-bmi/gym-bmi.component';
import { GymBrandComponent } from './gym/gym-brand/gym-brand.component';
import { GymFooterComponent } from './gym/gym-footer/gym-footer.component';
import { GymCopyrightComponent } from './gym/gym-copyright/gym-copyright.component';

// Music Layout
import { MusicComponent } from './music/music.component';
import { MusicNavComponent } from './music/music-nav/music-nav.component';
import { MusicHeaderComponent } from './music/music-header/music-header.component';
import { MusicAlbumComponent } from './music/music-album/music-album.component';
import { MusicArtistComponent } from './music/music-artist/music-artist.component';
import { MusicSponsorComponent } from './music/music-sponsor/music-sponsor.component';
import { MusicGalleryComponent } from './music/music-gallery/music-gallery.component';
import { MusicVideoComponent } from './music/music-video/music-video.component';
import { MusicBookingComponent } from './music/music-booking/music-booking.component';
import { MusicBlogComponent } from './music/music-blog/music-blog.component';
import { MusicSubscribeComponent } from './music/music-subscribe/music-subscribe.component';
import { MusicTestimonialComponent } from './music/music-testimonial/music-testimonial.component';
import { MusicFooterComponent } from './music/music-footer/music-footer.component';
import { MusicCopyrightComponent } from './music/music-copyright/music-copyright.component';

//Portfolio Layout
import { PortfolioMetroComponent } from './portfolio-metro/portfolio-metro.component';
import { PortfolioHeaderComponent } from './portfolio-metro/portfolio-header/portfolio-header.component';
import { PortfolioBreadcrumbComponent } from './portfolio-metro/portfolio-breadcrumb/portfolio-breadcrumb.component';
import { PortfolioGalleryComponent } from './portfolio-metro/portfolio-gallery/portfolio-gallery.component';
import { PortfolioFooterComponent } from './portfolio-metro/portfolio-footer/portfolio-footer.component';
import { PortfolioCopyrightComponent } from './portfolio-metro/portfolio-copyright/portfolio-copyright.component';
import { FashionComponent } from './portfolio-metro/portfolio-gallery/fashion/fashion.component';
import { BagsComponent } from './portfolio-metro/portfolio-gallery/bags/bags.component';
import { ShoesComponent } from './portfolio-metro/portfolio-gallery/shoes/shoes.component';
import { WatchComponent } from './portfolio-metro/portfolio-gallery/watch/watch.component';
import { GalleryComponent } from './portfolio-metro/portfolio-gallery/gallery/gallery.component';

//Wedding Layout
import { WeddingComponent } from './wedding/wedding.component';
import { WeddingNavComponent } from './wedding/wedding-nav/wedding-nav.component';
import { WeddingHeaderComponent } from './wedding/wedding-header/wedding-header.component';
import { WeddingAboutComponent } from './wedding/wedding-about/wedding-about.component';
import { WeddingBannerComponent } from './wedding/wedding-banner/wedding-banner.component';
import { WeddingGalleryComponent } from './wedding/wedding-gallery/wedding-gallery.component';
import { WeddingCountdownComponent } from './wedding/wedding-countdown/wedding-countdown.component';
import { WeddingBlogComponent } from './wedding/wedding-blog/wedding-blog.component';
import { WeddingWhenNWhereComponent } from './wedding/wedding-when-n-where/wedding-when-n-where.component';
import { WeddingCounterComponent } from './wedding/wedding-counter/wedding-counter.component';
import { WeddingTestimonialComponent } from './wedding/wedding-testimonial/wedding-testimonial.component';
import { WeddingBrandComponent } from './wedding/wedding-brand/wedding-brand.component';
import { WeddingSubscribeComponent } from './wedding/wedding-subscribe/wedding-subscribe.component';
import { WeddingFooterComponent } from './wedding/wedding-footer/wedding-footer.component';

//Yoga Layout
import { YogaComponent } from './yoga/yoga.component';
import { YogaNavComponent } from './yoga/yoga-nav/yoga-nav.component';
import { YogaHeaderComponent } from './yoga/yoga-header/yoga-header.component';
import { YogaExperienceComponent } from './yoga/yoga-experience/yoga-experience.component';
import { YogaScheduleComponent } from './yoga/yoga-schedule/yoga-schedule.component';
import { YogaExpertComponent } from './yoga/yoga-expert/yoga-expert.component';
import { YogaTestimonialComponent } from './yoga/yoga-testimonial/yoga-testimonial.component';
import { YogaPricingComponent } from './yoga/yoga-pricing/yoga-pricing.component';
import { YogaSubscribeComponent } from './yoga/yoga-subscribe/yoga-subscribe.component';
import { YogaBlogComponent } from './yoga/yoga-blog/yoga-blog.component';
import { YogaEventComponent } from './yoga/yoga-event/yoga-event.component';
import { YogaBrandComponent } from './yoga/yoga-brand/yoga-brand.component';
import { YogaCopyrightComponent } from './yoga/yoga-copyright/yoga-copyright.component';

//E-commerce Layout
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { EcommerceBannerSliderComponent } from './e-commerce/ecommerce-banner-slider/ecommerce-banner-slider.component';
import { EcommerceHeaderComponent } from './e-commerce/ecommerce-header/ecommerce-header.component';
import { EcommerceProductSliderComponent } from './e-commerce/ecommerce-product-slider/ecommerce-product-slider.component';
import { EcommerceParallaxBannerComponent } from './e-commerce/ecommerce-parallax-banner/ecommerce-parallax-banner.component';
import { EcommerceProductTabComponent } from './e-commerce/ecommerce-product-tab/ecommerce-product-tab.component';
import { EcommerceDownBannerComponent } from './e-commerce/ecommerce-down-banner/ecommerce-down-banner.component';
import { EcommerceRecentStoryComponent } from './e-commerce/ecommerce-recent-story/ecommerce-recent-story.component';
import { EcommerceFooterComponent } from './e-commerce/ecommerce-footer/ecommerce-footer.component';
import { SidebarComponent } from './e-commerce/product/widget/product-detail/sidebar/sidebar.component';
import { ProductDetailsComponent } from './e-commerce/product/widget/product-detail/product-details/product-details.component';
import { ProductDetailComponent } from './e-commerce/product/widget/product-detail/product-detail.component';
import { CheckoutComponent } from './e-commerce/product/widget/checkout/checkout.component';
import { CompareComponent } from './e-commerce/product/widget/compare/compare.component';
import { CartComponent } from './e-commerce/product/widget/cart/cart.component';
import { CollectionLeftSidebarComponent } from './e-commerce/product/widget/collection/collection-left-sidebar/collection-left-sidebar.component';
import { ColorComponent } from './e-commerce/product/widget/collection/filter/color/color.component';
import { BrandComponent } from './e-commerce/product/widget/collection/filter/brand/brand.component';
import { PriceComponent } from './e-commerce/product/widget/collection/filter/price/price.component';
import { CategoriesComponent } from './e-commerce/product/widget/collection/filter/categories/categories.component';
import { NewProductComponent } from './e-commerce/product/widget/new-product/new-product.component';
import { ProductBoxComponent } from './e-commerce/product/widget/product-box/product-box.component';
import { SuccessComponent } from './e-commerce/product/widget/success/success.component';
import { NgxMasonryModule } from 'ngx-masonry';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
  declarations: [
    EnterpriceComponent, enterpriceHeaderComponent, enterpriceNavComponent, enterpriceServicesComponent, enterpriceAboutComponent, enterpriceDownloadComponent, enterpriceScreenshotsComponent, enterpricePricingComponent, enterpriceVideoComponent, enterpriceSubscribeComponent, enterpriceFooterComponent, ModernComponent, ModernNavComponent, ModernHeaderComponent, ModernServicesComponent, ModernAboutComponent, ModernFunctionComponent, ModernTeamComponent, ModernScreenshotsComponent, ModernTeamMemberComponent, ModernPricingComponent, ModernBrandComponent, ModernSubscribeComponent, ModernFooterComponent, ModernSassComponent, ModernSassNavComponent, ModernSassHeaderComponent, ModernSassFeatureComponent, ModernSassBusinessComponent, ModernSassServicesComponent, ModernSassScreenshotsComponent, ModernSassPricingComponent, ModernSassTestimonialComponent, ModernSassBrandComponent, ModernSassFooterComponent, EnterpriceSassComponent, EnterpriceSassNavComponent, EnterpriceSassHeaderComponent, EnterpriceSassFeatureComponent, EnterpriceSassBuildComponent, EnterpriceSassWorkComponent, EnterpriceSassPriceComponent, EnterpriceSassTestimonialComponent, EnterpriceSassSubscribeComponent, EnterpriceSassFaqComponent, EnterpriceSassClientComponent, EnterpriceSassFooterComponent, EnterpriceSassCopyrightComponent, ResumeComponent, ResumeNavComponent, ResumeHeaderComponent, ResumeAboutComponent, ResumeServicesComponent, ResumePortfolioComponent, ResumeCounterComponent, ResumeScheduleComponent, ResumePricingComponent, ResumeSubscribeComponent, ResumeFooterComponent, AgencyComponent, AgencyNavComponent, AgencyHeaderComponent, AgencyContentComponent, AgencyServicesComponent, AgencyVideoComponent, AgencyCounterComponent, AgencyPricingComponent, AgencySpeakerComponent, AgencyTestimonialComponent, AgencyBlogComponent, AgencyFooterComponent, AgencyCopyrightComponent, EventsComponent, EventNavComponent,EventNavbgComponent, EventHeaderComponent, EventBookingComponent, EventAboutComponent, EventSpeakerComponent,ParqueEquipoComponent, EventSponsorComponent, EventScheduleComponent, EventTestimonialComponent, EventGalleryComponent, EventCounterComponent,EventFooterComponent, EventSubscribeComponent, EventPricingComponent, EventBlogComponent, EventContactComponent, EventCopyrightComponent,SomosComponent,SomosHeaderComponent,SomosContentComponent,SomosServicesComponent,SomosAboutComponent,HistoriaHeaderComponent,HistoriaScheduleComponent, HistoriaServicesComponent, EquipoHeaderComponent, EquipoServicesComponent,EquipoListComponent, RegistrateHeaderComponent,RegistrateScheduleComponent,RegistrateBlogComponent,RegistrateAlbumComponent,RegistrateBookingComponent, HistoriasHeaderComponent, HerramientasHeaderComponent,HistoriasListaComponent,HistoriasLeftSidebarComponent, SectorComponent, ServiciosComponent, HistoriaComponent, EquipoComponent, RegistrateComponent, HistoriasComponent, HerramientasComponent,TerminosComponent, TerminosHeaderComponent,PoliticasComponent, PoliticasHeaderComponent, GymComponent, GymNavComponent, GymHeaderComponent, GymAboutComponent, GymScheduleComponent, GymWorkoutAboutComponent, GymCounterComponent, GymTrainerComponent, GymTestimonialComponent, GymPricingComponent, GymBMIComponent, GymBrandComponent, GymFooterComponent, GymCopyrightComponent, MusicComponent, MusicNavComponent, MusicHeaderComponent, MusicAlbumComponent, MusicArtistComponent, MusicSponsorComponent, MusicGalleryComponent, MusicVideoComponent, MusicBookingComponent, MusicBlogComponent, MusicSubscribeComponent, MusicTestimonialComponent, MusicFooterComponent, MusicCopyrightComponent, PortfolioMetroComponent, PortfolioHeaderComponent, PortfolioBreadcrumbComponent, PortfolioGalleryComponent, PortfolioFooterComponent, PortfolioCopyrightComponent, FashionComponent, WeddingComponent, WeddingHeaderComponent, WeddingNavComponent, WeddingAboutComponent, WeddingBannerComponent, WeddingGalleryComponent, WeddingCountdownComponent, WeddingBlogComponent, WeddingWhenNWhereComponent, WeddingCounterComponent, WeddingTestimonialComponent, WeddingBrandComponent, WeddingSubscribeComponent, WeddingFooterComponent, YogaComponent, YogaNavComponent, YogaHeaderComponent, YogaExperienceComponent, YogaScheduleComponent, YogaExpertComponent, YogaTestimonialComponent, YogaPricingComponent, YogaSubscribeComponent, YogaBlogComponent, YogaEventComponent, YogaBrandComponent, YogaCopyrightComponent, BagsComponent, ShoesComponent, WatchComponent, GalleryComponent, ECommerceComponent, EcommerceBannerSliderComponent, EcommerceHeaderComponent, EcommerceProductSliderComponent, EcommerceParallaxBannerComponent, EcommerceProductTabComponent, EcommerceDownBannerComponent, EcommerceRecentStoryComponent, EcommerceFooterComponent, SidebarComponent, ProductDetailsComponent, ProductDetailComponent, CheckoutComponent, CompareComponent, CartComponent, CollectionLeftSidebarComponent, ColorComponent, BrandComponent, PriceComponent, CategoriesComponent, NewProductComponent, ProductBoxComponent, SuccessComponent],

  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    GalleryModule.forRoot(),
    SharedModule,
    CountToModule,
    AngularTiltModule,
    ScrollToModule.forRoot(),
    MasonryGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    Ng5SliderModule,
    NgxMasonryModule
  ],

  exports: [
    PortfolioGalleryComponent,
    SidebarComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    CompareComponent,
    CartComponent,
    ColorComponent,
    BrandComponent,
    PriceComponent,
    CategoriesComponent,
    NewProductComponent,
    ProductBoxComponent,
    ProductDetailComponent,
    EcommerceHeaderComponent,
    EcommerceFooterComponent,
    enterpriceNavComponent,
    enterpriceHeaderComponent],

  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})

export class LayoutsModule { }
