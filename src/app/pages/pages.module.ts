import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesComponent } from './pages.component';
import { TeamComponent } from './team/team.component';
import { TeamGridComponent } from './team-grid/team-grid.component';
import { TeamListComponent } from './team-list/team-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { TypographyComponent } from './typography/typography.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommingSoon2Component } from './comming-soon2/comming-soon2.component';

@NgModule({
  declarations: [PagesComponent, TeamComponent, TeamGridComponent, TeamListComponent, PageNotFoundComponent, FaqComponent, LoginComponent, RegisterComponent, CommingSoonComponent, TypographyComponent, MaintenanceComponent, AboutUsComponent, CommingSoon2Component],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CarouselModule,
    NgbModule
  ]
})
export class PagesModule { }
