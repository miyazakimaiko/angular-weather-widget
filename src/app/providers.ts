import { InjectionToken } from '@angular/core';

export const locationListToken = new InjectionToken('lookupListToken');

export const locationList: any[] = [
  { text: "Dublin, Ireland", searchValue: "Dublin,ie",  timezone: "Eire"},
  { text: "London, England", searchValue: "London,gb",  timezone: "Europe/Belfast"},
  { text: "Paris, France", searchValue: "Paris,fr",  timezone: "Europe/Paris"},
  { text: "Berlin, Germany", searchValue: "Berlin,de",  timezone: "Europe/Berlin"},
  { text: "Warsaw, Poland", searchValue: "Warsaw,pl",  timezone: "Poland"},
  { text: "Helsinki, Finland", searchValue: "Helsinki,fi",  timezone: "Europe/Helsinki"},
  { text: "Cairo, Egypt", searchValue: "Cairo,eg",  timezone: "Egypt"},
  { text: "Lagos, Nigeria", searchValue: "Lagos,ng",  timezone: "Africa/Lagos"},
  { text: "Cape Town, South Africa", searchValue: "Cape Town,za",  timezone: "Africa/Johannesburg"},
  { text: "New Delhi, India", searchValue: "New Delhi,in",  timezone: "Asia/Calcutta"},
  { text: "Bangkok, Thailand", searchValue: "Bangkok,th",  timezone: "Asia/Bangkok"},
  { text: "Tashkent, Uzbekistan", searchValue: "Tashkent,uz",  timezone: "Asia/Tashkent"},
  { text: "Moscow, Russia", searchValue: "Moscow,ru",  timezone: "Europe/Moscow"},
  { text: "Tokyo, Japan", searchValue: "Tokyo,jp",  timezone: "Asia/Tokyo"},
  { text: "Brazilia, Brazil", searchValue: "Brazilia,br",  timezone: "America/Sao_Paulo"}
];
