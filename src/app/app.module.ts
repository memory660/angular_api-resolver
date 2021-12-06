import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from "./shared/shared.module";
import {UiModule} from "./ui/ui.module";
import {
    faBeer,
    faCheckSquare,
    faHands,
    faHeart,
    faSquare,
    faUserMd,
    faUserNurse
} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faMedium, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faCheckSquare as farCheckSquare, faSquare as farSquare} from '@fortawesome/free-regular-svg-icons';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        SharedModule,
        UiModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private faLibrary: FaIconLibrary) {
        faLibrary.addIcons(
            faSquare,
            faCheckSquare,
            farSquare,
            farCheckSquare,
            faStackOverflow,
            faGithub,
            faTwitter,
            faMedium,
            faHeart,
            faUserNurse,
            faUserMd,
            faBeer,
            faHands
        )
    }
}
