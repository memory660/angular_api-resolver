import {Component, OnInit} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {NasaApodApiResponseModel} from "../../shared/models/nasa-apod-api-response.model";

@Component({
    selector: 'app-data-without-resolver',
    templateUrl: './data-without-resolver.component.html',
    styleUrls: ['./data-without-resolver.component.scss']
})
export class DataWithoutResolverComponent implements OnInit {
    astronomyData: NasaApodApiResponseModel;

    constructor(private dataService: DataService) {
        this.astronomyData = {
            date: '',
            explanation: '',
            hdurl: '',
            media_type: '',
            service_version: '',
            title: '',
            url: ''
        };
    }

    ngOnInit(): void {
        this.dataService.getAstronomyData().subscribe((response: NasaApodApiResponseModel) => {
            this.astronomyData = response;
        }, (error: Error) => {
            console.error(error);
        })
    }

}
