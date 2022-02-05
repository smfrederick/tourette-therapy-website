import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactMeComponent} from './contact-me.component';

@NgModule({
    declarations: [
        ContactMeComponent
    ],
    imports: [
        FlexLayoutModule
    ],
    providers: [],
    entryComponents: [
        ContactMeComponent
    ],
    exports: [
        ContactMeComponent
    ]
})
export class ContactMeModule { }
