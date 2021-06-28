import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

  news: News[] = []
  @Input()
  oneNews!: News;


  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().subscribe((data) => {
      console.log(data);
      // if(data == null){
      //   this.router.navigate(['/login']);
      // }
      this.news = data 
    })
  }

  //make it so it refreshes page as well
  handleDelete(id: any) {
    this.newsService.removeNews(id)
      .subscribe(
        () => console.log('News Deleted'),
        err => console.log(err)
      )
  }

}
