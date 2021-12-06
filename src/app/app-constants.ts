import {HttpHeaders} from "@angular/common/http";

export class AppConstants {
    public static readonly requestOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
}
