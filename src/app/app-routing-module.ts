import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

import { Skills } from './skills/skills';
import { Project } from './project/project';
import { Internship } from './internship/internship';
import { Certification } from './certification/certification';

import { Resume } from './resume/resume';




const routes: Routes = [
  // SPA Mode: All sections are on the home page.
  // Resume might still be a separate page.
  { path: 'resume', component: Resume },
  // Wildcard redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
