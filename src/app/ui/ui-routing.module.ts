import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {DataWithoutResolverComponent} from "./data-without-resolver/data-without-resolver.component";
import {DataWithResolverComponent} from "./data-with-resolver/data-with-resolver.component";
import {DataFetcherResolver} from "../shared/resolvers/data-fetcher.resolver";

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'planetary/astronomy',
        component: DataWithoutResolverComponent
    },
    {
        path: 'planetary/astronomy-resolved',
        component: DataWithResolverComponent,
        resolve: {
            astronomyData: DataFetcherResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UiRoutingModule {
}
