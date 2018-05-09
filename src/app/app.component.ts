import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from './data.service';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() newSource: string;
  @Output() twoSource = new EventEmitter<string>();


  title = 'app';
  objectKeys = Object.keys;
  articles: any;
  final: any;
  newId: any;
  result: any;
  news: any;
  

  idSelected: string;
  public currentId = this.newSource;
  private apiUrl = 'https://newsapi.org/v2/top-headlines?sources=' + this.currentId + '&apiKey=97c55d6f78ef4b89815173a70fd9b52a'

  constructor(private _data: DataService, private _http: HttpClient) {
  
  }

  accounts = [];

  onAccountAdded(newAccount: {name: string}) {
    this.accounts.push(newAccount);
    console.log(this.accounts);
  }

  ngOnInit() {
    this.selectedSource(this.currentId)
        .subscribe(res => {
          this.news = res.articles;
          console.log(res.articles);
        });
    
}

selectedSource(apiUrl) {
  return this._http.get<NewsArticles>(this.apiUrl)
  .map(result => this.result = result);
}

onNewSource(newSource:  string) {
  console.log("From App " + newSource);
  this.twoSource.emit(newSource);
 
}



//   @HostListener('window:scroll', ['$event']) 
//   onWindowScroll(event) {
//     console.log(window.pageYOffset);
// }

}
