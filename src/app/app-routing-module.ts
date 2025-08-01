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
  { path:'',component:Home},
  { path:'about',component:About},
  
  {path:'skills',component:Skills},
  {path:'project',component:Project},
  {path:'internship',component:Internship},
  {path:'certification',component:Certification},
 
  { path: 'resume', component:Resume},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
