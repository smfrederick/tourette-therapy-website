import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ResourcesComponent} from "./resources.component";

@NgModule({
  declarations: [
    ResourcesComponent
  ],
  imports: [
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [
    ResourcesComponent
  ],
  exports: [
    ResourcesComponent
  ]
})
export class ResourcesModule { }
