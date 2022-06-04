import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactUsComponent} from './contact-us.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        ContactUsComponent
    ],
    imports: [
        FlexLayoutModule,
      ReactiveFormsModule,
      MatCheckboxModule
    ],
    providers: [],
    entryComponents: [
        ContactUsComponent
    ],
    exports: [
        ContactUsComponent
    ]
})
export class ContactUsModule { }
