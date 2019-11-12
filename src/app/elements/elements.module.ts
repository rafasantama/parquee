import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { SharedModule } from '../shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountToModule } from 'angular-count-to';

import { ElementsComponent } from './elements.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionComponent } from './accordion/accordion.component';
import { BoxshadowComponent } from './boxshadow/boxshadow.component';
import { ButtonComponent } from './button/button.component';
import { ContactComponent } from './contact/contact.component';
import { EventScheduleComponent } from './event-schedule/event-schedule.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricingComponent } from './pricing/pricing.component';
import { CounterComponent } from './counter/counter.component';
import { CountDownComponent } from './count-down/count-down.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { VideoComponent } from './video/video.component';
import { ServiceComponent } from './service/service.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LayoutsModule } from '../layouts/layouts.module'

@NgModule({
  declarations: [ElementsComponent, AlertsComponent, AccordionComponent, BoxshadowComponent, ButtonComponent, ContactComponent, EventScheduleComponent, GalleryComponent, PricingComponent, CounterComponent, CountDownComponent, ProgressBarComponent, TestimonialComponent, VideoComponent, ServiceComponent, SubscribeComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule,
    NgbModule,
    CarouselModule,
    CountToModule,
    LayoutsModule
  ]
})
export class ElementsModule { }
