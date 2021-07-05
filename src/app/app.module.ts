import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherWidgetMainComponent } from './weather-widget-main.component';
import { WeatherDetailGeneralCompornent } from './weather-detail-general.component'
import { WeatherDataService } from './weather-data.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    WeatherDetailGeneralCompornent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    WeatherDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
