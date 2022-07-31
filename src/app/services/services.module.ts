import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ServicesComponent} from "./services.component";

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [
    ServicesComponent
  ],
  exports: [
    ServicesComponent
  ]
})
export class ServicesModule { }
