import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SideNavBarComponent} from "./side-nav-bar.component";

@NgModule({
  declarations: [
    SideNavBarComponent
  ],
  imports: [
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [
    SideNavBarComponent
  ],
  exports: [
    SideNavBarComponent
  ]
})
export class SideNavBarModule { }
