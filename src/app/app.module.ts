import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IgxTabsModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { WeatherWidgetMainComponent } from './weather-widget-main.component';
import { WeatherDetailGeneralCompornent } from './weather-detail-general.component';
import { WeatherDataService } from './weather-data.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { locationList, locationListToken } from './providers';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    WeatherDetailGeneralCompornent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    IgxTabsModule
  ],
  providers: [
    WeatherDataService,
    { provide: locationListToken, useValue: locationList }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
