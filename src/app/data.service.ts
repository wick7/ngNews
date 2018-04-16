import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/catch' ;
import 'rxjs/add/observable/throw' ;

interface NewsArticles {
  author: string;
  description: string;
  title: string;
  articles: any;
  publishedAt: number;
  urlToImage: string;
  url: string;
  source: any;
}

@Injectable()
export class DataService {
  
  newSource = 'abc-news';
  result:any;
  selected: string;


  private apiUrl: string;

  constructor(private _http: HttpClient) {}

  selectedSource(selected) {
    this.apiUrl = 'https://newsapi.org/v2/top-headlines?sources=' + selected + '&apiKey=97c55d6f78ef4b89815173a70fd9b52a'
    return this._http.get<NewsArticles>(this.apiUrl)
    .map(result => this.result = result);
  }

  getNews() {
    return this._http.get<NewsArticles>("https://newsapi.org/v2/top-headlines?country=us&apiKey=97c55d6f78ef4b89815173a70fd9b52a")
      .map(result => this.result = result);
  }



  
}
