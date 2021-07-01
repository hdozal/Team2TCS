import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }

   sportsAPIUrl : string ="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=967207012d2f44609abdd8fe19cd413a";


   getSportsNews() {
      return this.http.get<any>(this.sportsAPIUrl);
   }

}
