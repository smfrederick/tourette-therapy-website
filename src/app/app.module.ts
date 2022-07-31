import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeModule } from './home/home.module';
import {ContactUsModule} from './contact-us/contact-us.module';
import {SideNavBarModule} from "./side-nav-bar/side-nav-bar.module";
import {ResourcesModule} from "./resources/resources.module";
import {AboutMeModule} from "./about-me/about-me.module";
import {ServicesModule} from "./services/services.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ClickElsewhereDirective} from "./click-elsewhere-directive";

@NgModule({
  declarations: [
    AppComponent,
    ClickElsewhereDirective,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NavBarModule,
    SideNavBarModule,
    ContactUsModule,
    HomeModule,
    ServicesModule,
    ResourcesModule,
    AboutMeModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
