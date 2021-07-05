import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from './weather-data.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss']
})
export class WeatherWidgetMainComponent implements OnInit {
  WeatherData: any;

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.WeatherData = this.weatherDataService.get()
  }

  onSubmit(value: any) {
    this.weatherDataService.set(value.location).then(() => {
      this.WeatherData = this.weatherDataService.get()
    })
  }
}
