import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactUsComponent} from './contact-us.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        ContactUsComponent
    ],
    imports: [
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
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
