import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  getWeatherDetails(city: string){
    
    let weatherapi = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";
      return this.http.get(weatherapi);

  }
}
