import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {AppConstants} from "../../app-constants";
import {NasaApodApiResponseModel} from "../models/nasa-apod-api-response.model";
import {NasaMarsLatestPhotosApiResponseModel, NasaMarsPhotosApiResponseModel} from "../models/nasa-mars-photos.model";

@Injectable()
export class DataService {
    nasaApiKeyQueryParam = '?api_key=JCeai4LdUiqdGbNwQqz9iwdWldMcaAWRbBUhJr5N';

    constructor(private http: HttpClient) {
    }

    /**
     * Astronomy Picture of the Day (APOD)
     */
    getAstronomyData(): Observable<NasaApodApiResponseModel> {
        return this.http.get<NasaApodApiResponseModel>(environment.api.routes.nasa.planetaryAPOD.endpoint +
            this.nasaApiKeyQueryParam, AppConstants.requestOptions);
    }

    /**
     * Mars curiosity ROVER
     */
    getMarsLatestPhotos(): Observable<NasaMarsLatestPhotosApiResponseModel> {
        return this.http.get<NasaMarsLatestPhotosApiResponseModel>(environment.api.routes.nasa.mars.latestPhotos.endpoint +
            this.nasaApiKeyQueryParam, AppConstants.requestOptions);
    }

    getMarsPhoto(): Observable<NasaMarsPhotosApiResponseModel> {
        return this.http.get<NasaMarsPhotosApiResponseModel>(environment.api.routes.nasa.mars.photo.endpoint +
            this.nasaApiKeyQueryParam + '&earth_date=2015-6-3', AppConstants.requestOptions)
    }
}
