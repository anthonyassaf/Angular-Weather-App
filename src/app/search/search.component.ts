import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../services/favorites.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  title = 'Weather Application';
  city = "Beirut";
  country: string;
  details = [];
  chart: any;

  constructor(private weatherservice: WeatherService, 
    private favoritesService: FavoritesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('cityName')){
      this.city = this.route.snapshot.paramMap.get('cityName');
    }
    this.onClickSearch();
  }

  onClickSearch() {
    this.details = [];
    this.weatherservice.getWeatherDetails(this.city).subscribe((data) => {
      console.log(data);
      // this.details=data['list'];
      //filtering the five days forecast
      for (let i = 0; i < data['list'].length; i += 8) {
        this.details.push(data['list'][i]);
      }
      this.city = data['city'].name;
      this.country = data['city'].country;
    });
  }

  onClickFavorite() {
    this.favoritesService.addFavorite(this.city);
  }

}
