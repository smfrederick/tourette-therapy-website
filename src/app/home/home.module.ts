import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FlexLayoutModule
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
