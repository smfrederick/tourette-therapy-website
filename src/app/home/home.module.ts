import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeComponent} from './home.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FlexLayoutModule,
  ],
  providers: [],
  entryComponents: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
