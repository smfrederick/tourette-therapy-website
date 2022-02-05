import { NgModule } from '@angular/core';
import {NavBarComponent} from './nav-bar.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
