import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AboutMeComponent} from "./about-me.component";

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [
    AboutMeComponent
  ],
  exports: [
    AboutMeComponent
  ]
})
export class AboutMeModule { }
