import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactUsComponent} from './contact-us.component';

@NgModule({
    declarations: [
        ContactUsComponent
    ],
    imports: [
        FlexLayoutModule
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
