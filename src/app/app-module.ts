import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';

import { Skills } from './skills/skills';
import { Project } from './project/project';
import { Internship } from './internship/internship';
import { Certification } from './certification/certification';

import { Resume } from './resume/resume';



@NgModule({
  declarations: [
    App,
    About,
    Home,
  
    Skills,
    Project,
    Internship,
    Certification,
    
    Resume
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
