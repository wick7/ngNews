import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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

interface Sources {
  id: string;
  name: string;
  
}

@Injectable()
export class DataService {

  
  
  newSource: string;
  result:any;
  selected: string;
  idSelected: string;
  public currentId = 'ansa';
  private apiUrl = 'https://newsapi.org/v2/top-headlines?sources=' + this.currentId + '&apiKey=97c55d6f78ef4b89815173a70fd9b52a'

  constructor(private _http: HttpClient) {}

  selectedSource(apiUrl) {
    return this._http.get<NewsArticles>(this.apiUrl)
    .map(result => this.result = result);
  }



  
}
