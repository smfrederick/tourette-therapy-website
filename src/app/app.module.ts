import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeModule } from './home/home.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResourcesComponent } from './resources/resources.component';
import { ServicesComponent } from './services/services.component';
import {ContactUsModule} from './contact-us/contact-us.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ResourcesComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    NavBarModule,
    ContactUsModule,
    FlexLayoutModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
