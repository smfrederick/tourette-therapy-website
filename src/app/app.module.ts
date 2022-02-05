import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileModule } from './profile/profile.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { FaqComponent } from './faq/faq.component';
import { ServicesComponent } from './services/services.component';
import {ContactMeModule} from './contact-me/contact-me.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    FaqComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    NavBarModule,
    ContactMeModule,
    FlexLayoutModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
