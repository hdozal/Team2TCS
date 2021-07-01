import { Component, OnInit } from '@angular/core';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsNews: any[]=[];
  constructor(private sportsService: SportsService) { }

  async ngOnInit(): Promise<void> {

    this.sportsService.getSportsNews().subscribe((response: any) => {
      console.log("Sports API Response ", response)
      response.articles.forEach((elem : any) => {
        if(elem.urlToImage != null)
        this.sportsNews.push(elem)
      });
    console.log("Checking aray:", this.sportsNews)
    });
  }

}
