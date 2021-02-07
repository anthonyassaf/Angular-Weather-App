import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'Weather Application';
  cities: string[];
  country: string;
  details = [];
  weathers = new Map<string, []>();
  chart: any;
  
  constructor(private weatherservice: WeatherService, private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.getCities();
    this.setWeathers();
  }

  setWeathers(){
    for(let i=0;i<this.cities.length;i++){
      console.log(this.cities[i]);
      this.weatherservice.getWeatherDetails(this.cities[i]).subscribe((data) => {
        this.weathers.set(this.cities[i], data['list'][0]);
      });
    }
  }

  getCities(){
    this.cities = this.favoritesService.getCities();
  }
}
