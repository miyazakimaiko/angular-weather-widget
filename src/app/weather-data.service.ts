import { Inject, Injectable } from "@angular/core";
import { locationListToken } from "./providers";

@Injectable()
export class WeatherDataService {
    WeatherData: any;

    constructor(@Inject(locationListToken) public locationList: any[]) {}

    get() {
        console.log(this.WeatherData)
        return this.WeatherData
    }

    set(location: any) {
        const locationData = this.getLocationData(this.locationList, location);
        const lowercase = locationData.searchValue.toLowerCase()
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + lowercase + "&appid=4fab58f885a6f341a28007b52346cffc"

        let promise = new Promise<void>((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => { 
              this.WeatherData = data
              let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
              sunsetTime = this.convertTZ(sunsetTime, locationData.timezone);
          
              let localTime = new Date(this.WeatherData.dt * 1000);
              localTime = this.convertTZ(localTime, locationData.timezone);

              let sunriseTime = new Date(this.WeatherData.sys.sunrise * 1000);
              sunriseTime = this.convertTZ(sunriseTime, locationData.timezone);

              // this () returns true or false!
              this.WeatherData.isDay = (
                localTime.getTime() < sunsetTime.getTime() && 
                localTime.getTime() > sunriseTime.getTime());

              this.WeatherData.raining = (this.WeatherData.weather[0].main === 'Rain')
          
              this.WeatherData.local_time = localTime.toLocaleTimeString();
              this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
              this.WeatherData.sunrise_time = sunriseTime.toLocaleTimeString();
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

    getLocationData(dataGroup: any, target: string) {
        for (let data of dataGroup) {
            if (data.searchValue === target) {
                return data
            }
        }
        return
    }

    convertTZ(date: any, tzString: string) {
        return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
    }
}