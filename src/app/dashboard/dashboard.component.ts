import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'Weather Application';
  city = "Beirut";
  country: string;
  details = [];
  chart: any;

  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
    this.onClickSearch();
  }

  onClickSearch(){
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

}
