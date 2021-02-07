import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  static cities: string[] = ["Beirut"];

  constructor() { }

  public addFavorite(cityName: string){
    console.log(cityName)
    FavoritesService.cities.push(cityName);
  }

  public getCities(){
    return FavoritesService.cities;
  }
  
}
