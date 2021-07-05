import { ConstantPool } from "@angular/compiler";
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherDataService {
    WeatherData: any;

    constructor() {}

    get() {
        return this.WeatherData
    }

    set(location: string) {
        const lowercase = location.toLowerCase()
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + lowercase + "&appid=4fab58f885a6f341a28007b52346cffc"
        let promise = new Promise<void>((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => { 
              this.WeatherData = data
              let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
              this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
          
              let currentDate = new Date();
              // this () returns true or false!
              this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
          
              this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(1);
              this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(1);
              this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(1);
              this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(1);
              this.WeatherData.cloudiness = this.WeatherData.clouds.all;
              resolve();
            })
        })
        return promise;
    }
}