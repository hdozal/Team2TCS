import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { News } from '../models/news';

const apiUrl = 'http://localhost:3000/news'


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
  //   if(this.auth.retrieveUser()!==null){
  //   let httpOption = {
  //     headers : new HttpHeaders({
  //       'content-type': 'application-json',
  //       'Authorization': 'Bearer ' + this.auth.retrieveUser().token
  //     })
  //   }
  //   return this.http.get<Task[]>(apiUrl, httpOption)
  // }
  // else{
    return this.http.get<News[]>(apiUrl);
  // }
  }



  getSingleNews(id:any): Observable<News> {
    return this.http.get<News>(apiUrl + '/' + id)
  }

  addNews(data: any): Observable<News> {
    return this.http.post<News>(apiUrl, data)
  }

  removeNews(id: any): Observable<News> {
    return this.http.delete<News>(apiUrl + '/' + id)
  }

  updateNews(data: any)
  {
    console.log(data);
    return this.http.put<News>(apiUrl + '/' + data._id, data);
  }

}
