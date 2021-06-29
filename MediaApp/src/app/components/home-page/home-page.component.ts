import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [NgbCarouselConfig],
  // styles: [` .img-fluid{ min-width:100%}`]

})
export class HomePageComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  cityName: string='';
  desc: string='';
  temp: Number =0;
  currentTime: any;
  
  constructor(config: NgbCarouselConfig, private weatherService: WeatherService) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    
  }
  async ngOnInit(): Promise<void> {
    
    const request = await fetch("https://ipinfo.io/json?token=7dd06802688a7e")
    const json = await request.json()
     this.cityName = json.city;
    console.log(json.ip, json.country,json.city)

    this.weatherService.getWeatherDetails(this.cityName).subscribe((response : any) => {
      console.log("Api response is: ", JSON.stringify(response), (response))
        this.temp = response.main.temp;
        this.desc = response.weather[0].description;
        this.currentTime = new Date();
    });


  }

}
