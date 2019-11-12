import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: PageNotFoundComponent
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          title: "PAGES WITH FAQS",
          breadcrumb: "Faqs"
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: "PAGES WITH TYPOGRAPHY",
          breadcrumb: "Typography"
        }
      },
      {
        path: 'maintenance',
        component: MaintenanceComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
        data: {
          title: "About Us",
          breadcrumb: "About Us"
        }
      },
      {
        path: 'team',
        component: TeamComponent,
        data: {
          title: "PAGES WITH Team",
          breadcrumb: "Team"
        }
      },
      {
        path: 'team-grid',
        component: TeamGridComponent,
        data: {
          title: "Team Grid",
          breadcrumb: "Team Grid"
        }
      },
      {
        path: 'team-list',
        component: TeamListComponent,
        data: {
          title: "Team List",
          breadcrumb: "Team List"
        }
      },  
      {
        path: 'commingsoon1',
        component: CommingSoonComponent
      },
      {
        path: 'commingsoon2',
        component: CommingSoon2Component
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
