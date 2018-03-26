import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  articles: any;
  news: any;
  result:any;
  constructor(private _data: DataService) {
  
  }

  ngOnInit() {
    this._data.getNews()
      .subscribe(res => {
        this.news = res.articles;
        console.log(res.articles);
      });
  }
  
}
