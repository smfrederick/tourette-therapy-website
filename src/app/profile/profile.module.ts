import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProfileComponent} from './profile.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
