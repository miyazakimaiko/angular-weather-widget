import { Component, OnInit } from "@angular/core";
import { WeatherDataService } from "./weather-data.service";

@Component({
    selector: 'ww-detail-general',
    templateUrl: './weather-detail-general.component.html',
    styleUrls: ['./weather-detail-general.component.scss']
})
export class WeatherDetailGeneralCompornent implements OnInit {
    WeatherData: any;

    constructor (private weatherDataService: WeatherDataService) {}

    ngOnInit(): void {
        // this.WeatherData = this.weatherDataService.WeatherData;
    }
}