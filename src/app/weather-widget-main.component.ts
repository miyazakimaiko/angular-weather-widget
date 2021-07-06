import { Component, Inject, OnInit } from '@angular/core';
import { locationListToken } from './providers';
import { WeatherDataService } from './weather-data.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss']
})
export class WeatherWidgetMainComponent implements OnInit {
  WeatherData: any;

  constructor(
    private weatherDataService: WeatherDataService,
    @Inject(locationListToken) public locationList: any[]) { }

  ngOnInit(): void {
    this.onSubmit("Dublin,ie")
  }

  onSubmit(value: any) {
    console.log(value.toString())
    this.weatherDataService.set(value).then(() => {
      this.WeatherData = this.weatherDataService.get()
    })
  }
}
