import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) { }

  getPost() {
    return this.http.get('https://example.com/api/items').pipe(map(res => res));
  }

  getWeatherDetails(city: string) {
    const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",ind&units=metric&appid=1ffaa80ea2d33fe521d4f7f22167adcf"
    return this.http.get(url).pipe(map(res => res));
  }
}
