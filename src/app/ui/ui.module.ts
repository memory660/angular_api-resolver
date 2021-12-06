import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {UiRoutingModule} from "./ui-routing.module";
import {DataWithResolverComponent} from './data-with-resolver/data-with-resolver.component';
import {DataWithoutResolverComponent} from './data-without-resolver/data-without-resolver.component';
import {DataService} from "../shared/services/data.service";


@NgModule({
    declarations: [
        HomePageComponent,
        DataWithResolverComponent,
        DataWithoutResolverComponent
    ],
    imports: [
        CommonModule,
        UiRoutingModule
    ],
    providers: [
        DataService
    ]
})
export class UiModule {
}
