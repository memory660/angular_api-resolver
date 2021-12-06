import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {EMPTY, Observable} from "rxjs";
import {DataService} from "../services/data.service";
import {catchError} from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class DataFetcherResolver implements Resolve<any> {
    constructor(private dataService: DataService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.dataService.getAstronomyData().pipe(
            catchError((error) => {
                console.error(error);
                return EMPTY;
            })
        )
    }
}