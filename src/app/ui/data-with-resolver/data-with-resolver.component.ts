import {Component, OnInit} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {ActivatedRoute} from "@angular/router";
import {NasaApodApiResponseModel} from "../../shared/models/nasa-apod-api-response.model";

@Component({
    selector: 'app-data-with-resolver',
    templateUrl: './data-with-resolver.component.html',
    styleUrls: ['./data-with-resolver.component.scss']
})
export class DataWithResolverComponent implements OnInit {
    astronomyData: NasaApodApiResponseModel;

    constructor(private dataService: DataService,
                private activatedRoute: ActivatedRoute) {
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
        this.activatedRoute.data.subscribe((data) => {
            this.astronomyData = data.astronomyData;
        }, (error: Error) => {
            console.error(error);
        });
        console.log('Resolved data via snapshot =', this.activatedRoute.snapshot.data.astronomyData);
    }
}
