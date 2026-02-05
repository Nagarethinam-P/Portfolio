import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';

import { Skills } from './skills/skills';
import { Project } from './project/project';
import { Internship } from './internship/internship';
import { Certification } from './certification/certification';

import { Resume } from './resume/resume';
import { Header } from './header/header';
import { Contact } from './contact/contact';



@NgModule({
  declarations: [
    App,
    About,
    Home,

    Skills,
    Project,
    Internship,
    Certification,

    Resume,
    Header,
    Contact
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
