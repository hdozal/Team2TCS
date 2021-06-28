import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';



@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddNewsComponent implements OnInit {

  title: string = ''
  description: string = ''
  url: string = ''
  urlToImage: string = ''
  publishedAt: string = ''

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    const data = {
      title: this.title,
      description: this.description,
      url: this.url,
      urlToImage: this.urlToImage,
      publishedAt: this.publishedAt
    }

    this.newsService.addNews(data)
      .subscribe(() => {
        console.log('Task Added!')
        this.title = ''
        this.description = ''
        this.url = ''
        this.urlToImage = ''
        this.publishedAt = ''
      })
  }
}
